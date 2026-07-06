// Renders visitor stat tiles and a world map from Umami's public share API.
// No cookies or personal data are involved: the share token only grants read
// access to aggregate counts (visitors, pageviews, country totals).

(function () {
  const ALPHA2_TO_NUMERIC = {"AF":4,"AX":248,"AL":8,"DZ":12,"AS":16,"AD":20,"AO":24,"AI":660,"AQ":10,"AG":28,"AR":32,"AM":51,"AW":533,"AU":36,"AT":40,"AZ":31,"BS":44,"BH":48,"BD":50,"BB":52,"BY":112,"BE":56,"BZ":84,"BJ":204,"BM":60,"BT":64,"BO":68,"BQ":535,"BA":70,"BW":72,"BV":74,"BR":76,"IO":86,"BN":96,"BG":100,"BF":854,"BI":108,"CV":132,"KH":116,"CM":120,"CA":124,"KY":136,"CF":140,"TD":148,"CL":152,"CN":156,"CX":162,"CC":166,"CO":170,"KM":174,"CG":178,"CD":180,"CK":184,"CR":188,"CI":384,"HR":191,"CU":192,"CW":531,"CY":196,"CZ":203,"DK":208,"DJ":262,"DM":212,"DO":214,"EC":218,"EG":818,"SV":222,"GQ":226,"ER":232,"EE":233,"SZ":748,"ET":231,"FK":238,"FO":234,"FJ":242,"FI":246,"FR":250,"GF":254,"PF":258,"TF":260,"GA":266,"GM":270,"GE":268,"DE":276,"GH":288,"GI":292,"GR":300,"GL":304,"GD":308,"GP":312,"GU":316,"GT":320,"GG":831,"GN":324,"GW":624,"GY":328,"HT":332,"HM":334,"VA":336,"HN":340,"HK":344,"HU":348,"IS":352,"IN":356,"ID":360,"IR":364,"IQ":368,"IE":372,"IM":833,"IL":376,"IT":380,"JM":388,"JP":392,"JE":832,"JO":400,"KZ":398,"KE":404,"KI":296,"KP":408,"KR":410,"KW":414,"KG":417,"LA":418,"LV":428,"LB":422,"LS":426,"LR":430,"LY":434,"LI":438,"LT":440,"LU":442,"MO":446,"MG":450,"MW":454,"MY":458,"MV":462,"ML":466,"MT":470,"MH":584,"MQ":474,"MR":478,"MU":480,"YT":175,"MX":484,"FM":583,"MD":498,"MC":492,"MN":496,"ME":499,"MS":500,"MA":504,"MZ":508,"MM":104,"NA":516,"NR":520,"NP":524,"NL":528,"NC":540,"NZ":554,"NI":558,"NE":562,"NG":566,"NU":570,"NF":574,"MK":807,"MP":580,"NO":578,"OM":512,"PK":586,"PW":585,"PS":275,"PA":591,"PG":598,"PY":600,"PE":604,"PH":608,"PN":612,"PL":616,"PT":620,"PR":630,"QA":634,"RE":638,"RO":642,"RU":643,"RW":646,"BL":652,"SH":654,"KN":659,"LC":662,"MF":663,"PM":666,"VC":670,"WS":882,"SM":674,"ST":678,"SA":682,"SN":686,"RS":688,"SC":690,"SL":694,"SG":702,"SX":534,"SK":703,"SI":705,"SB":90,"SO":706,"ZA":710,"GS":239,"SS":728,"ES":724,"LK":144,"SD":729,"SR":740,"SJ":744,"SE":752,"CH":756,"SY":760,"TW":158,"TJ":762,"TZ":834,"TH":764,"TL":626,"TG":768,"TK":772,"TO":776,"TT":780,"TN":788,"TR":792,"TM":795,"TC":796,"TV":798,"UG":800,"UA":804,"AE":784,"GB":826,"US":840,"UM":581,"UY":858,"UZ":860,"VU":548,"VE":862,"VN":704,"VG":92,"VI":850,"WF":876,"EH":732,"YE":887,"ZM":894,"ZW":716};

  const LIGHT_RAMP = ["#fbe4e1", "#f0b3ab", "#e07e6c", "#c9483a", "#8f1f16"];
  const DARK_RAMP = ["#4a2a28", "#7a3b35", "#b0524a", "#e37b6b", "#ff9c85"];
  const NO_DATA_COLOR = { light: "#e9e9ea", dark: "#3a3a3d" };

  const MS_DAY = 24 * 60 * 60 * 1000;

  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function formatNumber(n) {
    return new Intl.NumberFormat().format(n);
  }

  function setStat(container, name, value) {
    const el = container.querySelector('[data-stat="' + name + '"]');
    if (el) el.textContent = value;
  }

  async function fetchJson(url, headers) {
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error("Request failed: " + url);
    return res.json();
  }

  function renderLegend(legendEl, ramp, max) {
    if (!legendEl) return;
    legendEl.innerHTML =
      '<span class="visitor-map-legend-label">Fewer</span>' +
      ramp.map((c) => '<span class="visitor-map-legend-swatch" style="background:' + c + '"></span>').join("") +
      '<span class="visitor-map-legend-label">More (' + formatNumber(max) + ")</span>";
  }

  function renderMap(container, countryCounts) {
    if (!window.d3 || !window.topojson) return;

    const svg = container.querySelector(".visitor-world-map");
    const legendEl = container.querySelector(".visitor-map-legend");

    let max = 1;
    const counts = {};
    countryCounts.forEach(({ x, y }) => {
      const numericId = ALPHA2_TO_NUMERIC[x];
      if (numericId != null) {
        counts[numericId] = y;
        if (y > max) max = y;
      }
    });

    fetch("/assets/json/countries-110m.json")
      .then((res) => res.json())
      .then((topology) => {
        const world = topojson.feature(topology, topology.objects.countries);
        world.features = world.features.filter((d) => +d.id !== 10); // drop Antarctica
        const projection = d3.geoNaturalEarth1().fitSize([960, 500], world);
        const path = d3.geoPath(projection);

        function paint() {
          const theme = getCurrentTheme();
          const ramp = theme === "dark" ? DARK_RAMP : LIGHT_RAMP;
          const scale = d3.scaleQuantize().domain([1, max]).range(ramp);
          const noDataColor = NO_DATA_COLOR[theme];

          d3.select(svg)
            .selectAll("path")
            .data(world.features)
            .join("path")
            .attr("d", path)
            .attr("class", "visitor-map-country")
            .attr("fill", (d) => {
              const count = counts[+d.id];
              return count ? scale(count) : noDataColor;
            })
            .selectAll("title")
            .data((d) => [d])
            .join("title")
            .text((d) => {
              const count = counts[+d.id];
              const name = (d.properties && d.properties.name) || "Unknown";
              return count
                ? name + ": " + formatNumber(count) + (count === 1 ? " visitor" : " visitors")
                : name + ": no visitors yet";
            });

          renderLegend(legendEl, ramp, max);
        }

        paint();

        // Repaint if the site's light/dark toggle changes after the map has rendered.
        const observer = new MutationObserver(paint);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      })
      .catch((err) => console.error("Visitor map failed to load:", err));
  }

  async function init(container) {
    const umamiUrl = container.dataset.umamiUrl;
    const shareSlug = container.dataset.shareSlug;
    const now = Date.now();

    try {
      const share = await fetchJson(umamiUrl + "/api/share/" + shareSlug);
      const authHeaders = {
        "x-umami-share-token": share.token,
        "x-umami-share-context": "1",
      };
      const websiteId = share.websiteId;

      const [allTime, last7Days, countries] = await Promise.all([
        fetchJson(umamiUrl + "/api/websites/" + websiteId + "/stats?startAt=0&endAt=" + now, authHeaders),
        fetchJson(
          umamiUrl + "/api/websites/" + websiteId + "/stats?startAt=" + (now - 7 * MS_DAY) + "&endAt=" + now,
          authHeaders,
        ),
        fetchJson(
          umamiUrl + "/api/websites/" + websiteId + "/metrics?type=country&startAt=0&endAt=" + now + "&limit=250",
          authHeaders,
        ),
      ]);

      setStat(container, "totalVisitors", formatNumber(allTime.visitors));
      setStat(container, "last7Visitors", formatNumber(last7Days.visitors));
      setStat(container, "totalPageviews", formatNumber(allTime.pageviews));

      renderMap(container, countries);
      container.classList.add("visitor-stats-loaded");
    } catch (err) {
      console.error("Visitor stats failed to load:", err);
      container.classList.add("visitor-stats-error");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("visitor-stats");
    if (container) init(container);
  });
})();
