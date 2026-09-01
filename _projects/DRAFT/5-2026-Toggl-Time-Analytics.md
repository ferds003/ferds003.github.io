---
layout: page
title: Toggl Time Analytics — Live Dashboard
description: A live, self-updating dashboard tracking upskilling and project time, built on an automated Toggl → Supabase pipeline
img: assets/img/2026/thumbnail-toggl-analytics.png
date: 2026-07-30
category: data_science
subcategory: pure_software
chart:
  chartjs: true
published: false
---

<!-- SCAFFOLD DRAFT — review before flipping published: true.
     TODO: add img thumbnail at assets/img/2026/thumbnail-toggl-analytics.png (or remove the img field). -->

### Overview

This project tracks how I spend time on upskilling and side projects, end to end:

**Toggl Track** (time logging) → **GitHub Actions** (daily cron sync) → **Supabase Postgres** (storage + aggregation) → **this page** (live Chart.js fetch on every load).

No rebuild of this site is needed for the chart to stay current — it queries Supabase directly from your browser each time this page loads.

Sync pipeline source: [github.com/ferds003/toggl-analytics-sync](https://github.com/ferds003/toggl-analytics-sync)

### Daily hours (live)

<canvas id="toggl-daily-chart" style="max-height: 400px;"></canvas>

<script>
(function () {
  const SUPABASE_URL = "https://jpthlaowknwzkjygxeyg.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdGhsYW93a253emtqeWd4ZXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MTUxNDIsImV4cCI6MjA5ODk5MTE0Mn0.vuLTOQWhdOgPHlUr78FH3DFwxF2l1V4P-0xEEJHePng";

  const endpoint = `${SUPABASE_URL}/rest/v1/daily_total?select=*&order=entry_date.asc&apikey=${SUPABASE_ANON_KEY}`;

  fetch(endpoint)
    .then((res) => res.json())
    .then((rows) => {
      const ctx = document.getElementById("toggl-daily-chart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: rows.map((r) => r.entry_date),
          datasets: [
            {
              label: "Hours logged",
              data: rows.map((r) => r.total_hours),
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true, title: { display: true, text: "Hours" } },
          },
        },
      });
    })
    .catch((err) => {
      document.getElementById("toggl-daily-chart").outerHTML =
        "<p><em>Couldn't load live data right now.</em></p>";
      console.error("Toggl chart fetch failed:", err);
    });
})();
</script>

### Per-project breakdown

TODO: same fetch pattern against the `daily_summary` view (`entry_date, project_name, hours`), grouped into a stacked bar or separate chart. Left out of this scaffold — decide layout once the daily chart above is confirmed working.

### Pipeline notes

- **Security model:** the browser only ever talks to Supabase using the public `anon` key above, which can only `SELECT` from two read-only aggregate views (`daily_total`, `daily_summary`). Raw entry descriptions and the underlying `time_entries` table are blocked by Postgres RLS — verified the anon key gets `[]` back if it tries to query the base table directly.
- **Sync cadence:** GitHub Actions runs `toggl_sync.py` daily; first run backfills up to a year of history via Toggl's Reports API, every run after that is incremental.
