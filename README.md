# LearnCppDeeply

## 🚀 Motivation for Learning C++ in Embedded Systems

👨‍💻 As an embedded software architect, I have always worked extensively with C, understanding how source code is converted to machine code and how it runs on embedded low-level hardware. ✨ However, C++ offers many underlying mechanisms that I am eager to demystify, especially in the context of embedded systems. My motivation to learn C++ comes from the desire to understand its more advanced features, such as object-oriented programming (OOP), and how these features can be leveraged effectively in embedded environments.

💡 C++ allows for a more sophisticated design by offering abstractions and features like OOP, templates, and RAII, which can help create scalable and maintainable systems. My goal is to bridge the gap between basic C programming and advanced C++ concepts, showing how C++ can be applied in real-world embedded projects. By documenting this journey, I hope to provide valuable insights for others who want to deepen their understanding of C++.

## 🌍 Where C++ is Used in the Real World

| 🛠️ Use Case                  | 📖 Description                                                                                                                                                                                                                                                                                   | 🔗 Example GitHub                                                                                                                                                 | 📝 Example .cpp File                                                                                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🎮 **Gaming and Graphics**   | C++ is extensively used in game development for creating high-performance game engines and graphics rendering systems. Its efficiency and control over hardware make it suitable for real-time gaming applications, including those on embedded platforms like consoles and handheld devices. | [raylib](https://github.com/raysan5/raylib) - A simple and easy-to-use library to enjoy game programming in C++.                                               | [example.cpp](https://github.com/raysan5/raylib/blob/master/examples/core/core_basic_window.cpp) - An example of creating a basic game window in C++ using raylib.                              |
| 🚗 **Automotive Systems**    | C++ is used in Electronic Control Units (ECUs) for modern vehicles. Features like OOP and templates allow developers to create modular and reusable code, which is crucial for complex systems like ADAS, IVI, instrument clusters, and telematics.                                           | [ApolloAuto/apollo](https://github.com/ApolloAuto/apollo) - A comprehensive autonomous driving platform implemented primarily in C++.                          | [perception.cpp](https://github.com/ApolloAuto/apollo/blob/master/modules/perception/common/algorithm/sensor_manager/sensor_manager.cc) - An example of using C++ for sensor manager.                    |
| 📱 **Consumer Electronics**  | Many consumer devices, such as smart TVs, cameras, and home automation devices, use C++ to handle both real-time control and user interface functionalities. Android also uses C++ for hardware-related functionalities, including sensor control and laser applications.                     | [Android Platform](https://android.googlesource.com/platform/) - The Android source code repository.                                                           | [Sensors.cpp](https://android.googlesource.com/platform/frameworks/native/+/refs/heads/master/services/sensorservice/SensorService.cpp) - Example C++ file handling sensor services in Android. |
| 🤖 **Robotics**              | Robotics systems often rely on embedded hardware for motor control, sensor processing, and decision-making. C++ is ideal for robotics as it can handle both low-level hardware interaction and high-level behavior modeling, using libraries like ROS.                                        | [ros/ros\_tutorials](https://github.com/ros/ros_tutorials) - A collection of tutorials and code examples for learning the basics of ROS using C++.             | [talker.cpp](https://github.com/ros/ros_tutorials/blob/noetic-devel/roscpp_tutorials/talker/talker.cpp) - An example C++ file for a simple ROS node that publishes messages.                    |
| 🏥 **Medical Devices**       | Safety-critical medical devices, such as patient monitoring systems and diagnostic machines, use C++ due to its strong type-checking, deterministic behavior, and support for real-time constraints.                                                                                          | [OpenEMR](https://github.com/openemr/openemr) - An open-source electronic medical record that includes components using C++ for performance-critical features. | [emr.cpp](https://github.com/openemr/openemr/blob/master/gacl/gacl.class.php) - Example file showcasing use of C++ in healthcare applications.                                                  |
| ✈️ **Aerospace and Defense** | C++ is used in avionics systems, drones, and other defense applications where reliability, efficiency, and direct hardware access are critical. Features like RAII help manage resources effectively, which is important in constrained environments.                                         | [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) - An open-source flight control solution for drones, developed in C++.                               | [FlightTask.cpp](https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/flight_mode_manager/tasks/FlightTask.cpp) - An example of using C++ for flight control tasks in drones.             |


### 🧩 Exploring OOP Concepts with Real-World Examples

In this repository, I will explore OOP concepts with relatable, real-world examples. We'll discuss why these concepts evolved, how they solve particular problems, and how they can be applied effectively. For each concept, I'll provide practical applications, complete with example source code hosted on GitHub, to motivate C++ learners to explore these topics more deeply.

### 📌 What You'll Find Here:

- **📍 Learning Roadmap**: A step-by-step guide from beginner to advanced C++ concepts.
- **📚 Blogs and Resources**: Easy-to-follow explanations to help demystify complex topics.
- **🎥 Video Links**: Curated video content to complement your learning journey.
- **💡 Topics with Use Cases**: Real-world applications of each concept to help you understand their purpose.
- **💻 Example Source Code**: Practical examples for each chapter, complete with Makefiles for easy compilation and testing.

### 👥 Who This Is For:

This repository is ideal for beginners who are eager to learn C++ deeply. Additionally, this repository is particularly suited for those coming from an embedded background. My journey includes exploring C++ down to the assembly level and understanding the intricacies of compiler-generated code. As an architect, I also document real-world use cases to provide practical insights for learners.

### 🚦 How to Get Started:

- Begin with the **📍 Learning Roadmap** to get an overview of the topics covered.
- Dive into the **🔰 Basics** and gradually work your way to advanced topics.
- Experiment with the **💻 example source code** to solidify your understanding.

Feel free to explore, learn, and contribute! Together, let's unlock the full potential of C++ programming, one concept at a time.

### 🤝 Contributions:

Contributions are welcome! If you'd like to add content, improve examples, or share insights, please feel free to create a pull request. Let's make this learning journey enriching for everyone.

