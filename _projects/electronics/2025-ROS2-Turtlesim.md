---
layout: page
title: Closed looped path system using ROS2 Humble Turtlesim
description: Demo of ROS2 script to program simulated robot to not touch boundaries in environment 
date: 2025-05-22 20:40:00
category: electronics
img: assets/img/2025/ros2/thumbnail_ros2.gif
subcategory: robotics and control
giscus_comments: true
pretty_table: true
images:
    slider: true
driveId: 11KRIACznI7AISJtVX2fLqnaGYjDVqAVp
---

### OVERVIEW:

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include googleDrivePlayer.html id=page.driveId %}
  </div>
</div>
<div class="caption">
  Explanation video for the ROS2 demonstration
</div>

This simple project demonstrates how **ROS 2 topics** and **services** work using the **Turtlesim** package. It focuses on creating a Python node that controls the turtle’s motion and dynamically changes its pen color depending on its position in the simulator.

In ROS 2, communication between nodes primarily happens through:

- `Topics` – for continuous, asynchronous data exchange (publish/subscribe model).
- `Services` – for synchronous, request/response interactions.

This project showcases both communication methods in one integrated example using the **Turtlesim** simulator under `Ubuntu 22.04` with the ROS distro to be `ROS2 Humble`.


### METHODOLOGY:


<div class="row mt-3 justify-content-center">
  <!-- First image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/ros2/rqt_graph_1.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      RQT graph output that showcase the interactions between nodes and topics
    </div>
  </div>

  <!-- Second image -->
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading='eager' path='assets/img/2025/ros2/rqt_graph.png' class='img-fluid rounded z-depth-1' zoomable=true %}
    <div class="caption mt-2">
      RQT graph output that provides the closed-looped behevior of the path-making system!
    </div>
  </div>
</div>

| Communication Type | Purpose | Example in this Demo |
|--------------------|----------|----------------------|
| **Topic** | Continuous message exchange | `/turtle1/cmd_vel`, `/turtle1/pose` |
| **Service** | One-time request–response | `/turtle1/set_pen` |

Below is the code that I made for this application. The build tool for this is the `colcon` command line tool in which constant change in the code will need to be updated via `bash` setup under `~/.bashrc` file. Do check out the crash course on how to set this up further for your applications [here!](https://www.youtube.com/watch?v=Gg25GfA456o&list=WL&index=37&t=18s)

```python
#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from turtlesim.msg import Pose
from geometry_msgs.msg import Twist
from turtlesim.srv import SetPen
from functools import partial

class TurtleControllerNode(Node):
    def __init__(self):
        super().__init__("turtle_control")
        self.previous_x_ = 0
        self.cmd_vel_publisher_ = self.create_publisher(Twist, "/turtle1/cmd_vel", 10)
        self.pose_subscriber_ = self.create_subscription(
            Pose, "/turtle1/pose", self.pose_callback, 10
        )
        self.get_logger().info("Turtle controller has been started.")

    def pose_callback(self, pose: Pose):
        cmd = Twist()

        # Boundary-based motion control
        if pose.x > 9.0 or pose.x < 2.0 or pose.y < 2.0 or pose.y > 9.0:
            cmd.linear.x = 1.0
            cmd.angular.z = 1.0
        else:
            cmd.linear.x = 5.0
            cmd.angular.z = 0.0

        self.cmd_vel_publisher_.publish(cmd)

        # Change pen color when crossing x=5.5
        if pose.x > 5.5 and self.previous_x_ <= 5.5:
            self.previous_x_ = pose.x
            self.get_logger().info("Set color to blue :)")
            self.call_set_pen_service(0, 0, 255, 3, 0)
        elif pose.x <= 5.5 and self.previous_x_ > 5.5:
            self.previous_x_ = pose.x
            self.get_logger().info("Set color to green :)")
            self.call_set_pen_service(0, 255, 0, 3, 0)

    def call_set_pen_service(self, r, g, b, width, off):
        client = self.create_client(SetPen, "/turtle1/set_pen")
        while not client.wait_for_service(1.0):
            self.get_logger().warn("Waiting for /turtle1/set_pen service...")

        request = SetPen.Request()
        request.r = r
        request.g = g
        request.b = b
        request.width = width
        request.off = off

        future = client.call_async(request)
        future.add_done_callback(partial(self.callback_set_pen))

    def callback_set_pen(self, future):
        try:
            response = future.result()
        except Exception as e:
            self.get_logger().error(f"Service call failed: {e}")

def main(args=None):
    rclpy.init(args=args)
    node = TurtleControllerNode()
    rclpy.spin(node)
    rclpy.shutdown()
```
The project is implemented as a **single ROS 2 Python node** named `turtle_control`.  
The workflow follows three main steps: **subscription**, **publication**, and **service calling**.

**Subscribing to Pose Data**
- The node subscribes to `/turtle1/pose`, receiving continuous updates on the turtle’s position and orientation.  
This allows the node to react dynamically to position changes.

**Publishing Velocity Commands**
- The node publishes to /turtle1/cmd_vel using messages of type geometry_msgs/msg/Twist.
When the turtle approaches boundaries, its motion pattern changes.


**Calling the SetPen Service**
- Whenever the turtle crosses the x = 5.5 line, it triggers a service call to /turtle1/set_pen, changing the pen color between green and blue.


### LEARNINGS:

This project successfully integrates topics and services within a single ROS 2 node.
It demonstrates how:

- Topics manage continuous data streams for real-time control.
- Services handle specific requests for state or configuration changes.
- Combining both allows for reactive and dynamic robot behaviors.
- Through the Turtlesim example, I’ve illustrated a core ROS 2 principle:

`Real-time feedback (topics)` + `event-driven actions (services)` = adaptive robotic systems.


__REFLECTIONS and HOW THIS CAN BE FURTHER IMPROVED__: This definitely challenged me how to apply the turtlesim package via reading its documentation and other works, and demonstrate my understanding on the different ROS communications that are often seen in real world applications or more importantly in `mobile robitics.` Future works that I definitely want to aim and try is to utilize this in an actual robot and how maybe a `RPI` can interact and ground the application in actual hardware upon this software implementation.

To provide a more in-depth discussion and analysis of ROS2 basics, you may check my video-docus [here!]({% post_url 2025/2025-05-22-ROS2-Learnings %})