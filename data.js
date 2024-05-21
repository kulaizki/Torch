export const Cards = [
  {
    title: "JavaScript Developer",
    description:
      "Master the fundamentals then delve into frameworks and libraries to become a well-rounded JavaScript developer.",
    img: require("./src/assets/images/js.png"),
  },
  {
    title: "Python Developer",
    description:
      "Build a strong foundation in Python syntax, data structures, and algorithms before exploring specialized libraries and frameworks for your desired development path.",
    img: require("./src/assets/images/python.png"),
  },
  {
    title: "React Developer",
    description:
      "Grasp core React concepts, hooks, and state management, then conquer popular libraries and tools to become a proficient React developer.",
    img: require("./src/assets/images/react.webp"),
  },
  {
    title: "Game Developer",
    description:
      "Explore the Unity engine and learn how to create visually stunning games with fun mechanics, rich storytelling, and an interactive environment.",
    img: require("./src/assets/images/unity.png"),
  },
  {
    title: "Cybersecurity",
    description: "description",
    img: require("./src/assets/images/js.png"),
  },
];

export const SubCards = [
  {
    title: "Fundamentals",
    img: require("./src/assets/images/js.png"),
  },

  {
    title: "Technology",
    img: require("./src/assets/images/js.png"),
  },

  {
    title: "Best Practices",
    img: require("./src/assets/images/js.png"),
  },

  {
    title: "Projects",
    img: require("./src/assets/images/js.png"),
  },
];

export const DescriptionCards = [
  {
    title: "JavaScript Developer",
    fundamentals: {
      descTitle: "Fundamentals in Javascript",
      image: require("./src/assets/images/js.png"),
      body: {
        introduction:
          "JavaScript is a versatile and widely-used programming language that is fundamental to modern web development. Understanding the core concepts of JavaScript is essential for creating dynamic and interactive web applications. Here are the three most important fundamentals of JavaScript:",
        bullets: [
          {
            bTitle: "Variables and Data Types",
            bBody:
              "Variables are used to store data values, and JavaScript supports various data types such as numbers, strings, booleans, objects, and arrays. Mastering how to declare, initialize, and manipulate variables is crucial for any JavaScript programmer. The let, const, and var keywords are used for variable declaration, each with its own scope and usage rules.",
          },
          {
            bTitle: "Functions",
            bBody:
              "Functions are blocks of code designed to perform specific tasks. They are one of the building blocks of JavaScript, enabling code reusability and modularity. Functions can be declared using function declarations, function expressions, or arrow functions. Understanding how to pass arguments to functions and return values is essential for efficient programming.",
          },
          {
            bTitle: "Control Structures",
            bBody:
              "Control structures such as loops and conditionals allow developers to control the flow of the program. Conditionals (if, else if, else, switch) enable decision-making in code, while loops (for, while, do...while) facilitate repeated execution of code blocks. Mastering these structures is vital for handling complex logic and iterations in applications.",
          },
        ],
      },
    },
    technology: {
      descTitle: "Technologies and Extensions of JavaScript",
      image: require("./src/assets/images/js.png"),
      body: {
        introduction:
          "JavaScript is a foundational technology in modern web development, enabling the creation of dynamic, interactive user interfaces and applications. Its versatility and ubiquity have made it integral to both client-side and server-side development, leading to the emergence of numerous frameworks and libraries that enhance its functionality. JavaScript has significantly influenced the development of single-page applications (SPAs), real-time applications, and cross-platform mobile apps, among others.",
        subTitle: "Applications and Technologies Powered by JavaScript:",
        technologies: [
          {
            subTitle: "1. Web Browsers and Front-End Development",
            bullets: [
              {
                bTitle: "• React",
                bBody:
                  "A popular library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components and manage the state efficiently.",
              },
              {
                bTitle: "• Angular",
                bBody:
                  "A comprehensive framework for building web applications, providing tools for everything from data binding to form validation and routing.",
              },
              {
                bTitle: "• Vue.js",
                bBody:
                  "A progressive framework for building user interfaces, known for its simplicity and flexibility in integrating with other projects and libraries.",
              },
            ],
          },
          {
            subTitle: "2. Server-Side Development",
            bullets: [
              {
                bTitle: "• Node.js",
                bBody:
                  "An open-source, cross-platform runtime environment that allows JavaScript to be used for server-side scripting. It enables the development of scalable network applications and is particularly well-suited for real-time applications.",
              },
              {
                bTitle: "• Express.js",
                bBody:
                  "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's widely used for building RESTful APIs and web servers.",
              },
              {
                bTitle: "• Meteor",
                bBody:
                  "A full-stack platform for building web and mobile applications, providing an integrated solution that includes the front-end and back-end, database management, and deployment.",
              },
            ],
          },
          {
            subTitle: "3. Mobile App Development",
            bullets: [
              {
                bTitle: "• React Native",
                bBody:
                  "A framework that allows developers to build mobile applications using JavaScript and React. It enables the creation of natively rendered apps for iOS and Android from a single codebase.",
              },
              {
                bTitle: "• Ionic",
                bBody:
                  "A complete open-source SDK for hybrid mobile app development. It uses web technologies like HTML, CSS, and JavaScript to build mobile apps.",
              },
            ],
          },
        ],
      },
    },
    bestPractices: {
      descTitle: "Appropriate Usage of JavaScript (spoiler: there's a lot)",
      image: require("./src/assets/images/js.png"),
      body: {
        introduction:
          "JavaScript, as a dynamic and versatile language, offers a lot of flexibility. However, to write clean, efficient, and maintainable code, it's essential to follow best practices. These best practices help in avoiding common pitfalls, enhancing performance, and ensuring code readability and reusability.",
        subTitle: "Applications and Technologies Powered by JavaScript:",
        practices: [
          {
            subTitle: "1. Use const and let instead of var",
            bullets: [
              {
                bTitle: "• const:",
                bBody:
                  "Use for variables that are not reassigned after their initial assignment. This ensures immutability and prevents accidental reassignments.",
              },
              {
                bTitle: "• let:",
                bBody:
                  "Use for variables that need to be reassigned. It is block-scoped, which reduces the chances of errors related to variable hoisting.",
              },
            ],
          },
          {
            subTitle: "2. Write Modular and Reusable Code",
            bullets: [
              {
                bTitle: "• Functions and Modules:",
                bBody:
                  "Break your code into smaller, reusable functions and modules. This improves readability and maintainability. For example, you could create utility functions in a separate file and import them as needed.",
              },
            ],
          },
          {
            subTitle: "3. Use Arrow Functions for Concise Syntax",
            bullets: [
              {
                bTitle: "• Arrow Functions:",
                bBody:
                  "Provide a shorter syntax and lexically bind the this value, which avoids common pitfalls with the this keyword in regular functions. This is especially useful for array operations like map, filter, and reduce.",
              },
            ],
          },
          {
            subTitle: "4. Consistent Naming Conventions",
            bullets: [
              {
                bTitle: "• camelCase:",
                bBody:
                  "Use camelCase for variable and function names to maintain consistency and improve readability. This involves starting with a lowercase letter and capitalizing the first letter of each subsequent word.",
              },
            ],
          },
          {
            subTitle: "5. Avoid Global Variables",
            bullets: [
              {
                bTitle: "• Encapsulation:",
                bBody:
                  "Encapsulate your code within functions or modules to avoid polluting the global namespace, which can lead to conflicts and hard-to-debug issues. Using Immediately Invoked Function Expressions (IIFEs) or module patterns can help keep variables scoped appropriately.",
              },
            ],
          },
        ],
      },
    },
    projects: {
      descTitle: "Making Projects in JavaScript",
      image: require("./src/assets/images/js.png"),
      body: {
        introduction:
          "Creating projects in JavaScript is an excellent way to apply theoretical knowledge, practice coding skills, and build a portfolio. When starting a new JavaScript project, it's important to follow a structured approach:",
        subBullet: [
          {
            bTitle: "• Define the Project Scope",
            bBody:
              "Clearly outline what the project will do, its features, and its goals. This helps in staying focused and organized.",
          },
          {
            bTitle: "• Set Up the Development Environment",
            bBody:
              "Ensure you have the necessary tools installed, such as a code editor (e.g., VS Code), Node.js for running JavaScript outside the browser, and version control (e.g., Git).",
          },
          {
            bTitle: "• Plan the Structure",
            bBody:
              "Organize your project files and directories. Typically, this includes separating HTML, CSS, and JavaScript files, and setting up a src directory for your source code.",
          },
          {
            bTitle: "• Write and Test Code",
            bBody:
              "Start coding based on your project plan. Regularly test your code to catch errors early and ensure everything works as expected.",
          },
          {
            bTitle: "• Refactor and Document",
            bBody:
              "Clean up your code, optimize for performance, and add comments or documentation to explain how your code works.",
          },
        ],

        subTitle: "Starting Projects for Beginners",
        project: [
          {
            subTitle: "1. To-Do List Application",
            bullets: [
              {
                bTitle: "Description",
                bBody:
                  "Create a simple to-do list app where users can add, delete, and mark tasks as completed. This project helps beginners understand DOM manipulation, event handling, and basic CRUD (Create, Read, Update, Delete) operations.",
              },
              {
                bTitle: "Key Learning Points",
                bBody:
                  "HTML form handling, JavaScript functions and event listeners, local storage for persisting data.",
              },
            ],
          },
          {
            subTitle: "2. Calculator",
            bullets: [
              {
                bTitle: "Description",
                bBody:
                  "Build a basic calculator that performs arithmetic operations like addition, subtraction, multiplication, and division. This project is great for practicing user input handling and implementing basic algorithms.",
              },
              {
                bTitle: "Key Learning Points",
                bBody:
                  "Handling user input, performing calculations, updating the DOM to display results.",
              },
            ],
          },
          {
            subTitle: "3. Weather App",
            bullets: [
              {
                bTitle: "Description",
                bBody:
                  "Develop a weather application that fetches and displays weather data for a specified location using a public API like OpenWeatherMap. This project introduces working with APIs, JSON, and asynchronous JavaScript (promises or async/await).",
              },
              {
                bTitle: "Key Learning Points",
                bBody:
                  "Fetch API for making network requests, handling JSON data, displaying dynamic content.",
              },
            ],
          },
        ],
      },
    },
  },

  {
    title: "Python Developer",
    fundamentals: {
      descTitle: "Introduction to the Various Types of Snakes",
      image: require("./src/assets/images/pythonbig.jpg"),
      body: {
        introduction:
          "JavaScript is a versatile and widely-used programming language that is fundamental to modern web development. Understanding the core concepts of JavaScript is essential for creating dynamic and interactive web applications. Here are the three most important fundamentals of JavaScript:",
        bullets: [
          {
            bTitle: "Variables and Data Types",
            bBody:
              "Variables are used to store data values, and JavaScript supports various data types such as numbers, strings, booleans, objects, and arrays. Mastering how to declare, initialize, and manipulate variables is crucial for any JavaScript programmer. The let, const, and var keywords are used for variable declaration, each with its own scope and usage rules.",
          },
          {
            bTitle: "Functions",
            bBody:
              "Functions are blocks of code designed to perform specific tasks. They are one of the building blocks of JavaScript, enabling code reusability and modularity. Functions can be declared using function declarations, function expressions, or arrow functions. Understanding how to pass arguments to functions and return values is essential for efficient programming.",
          },
          {
            bTitle: "Control Structures",
            bBody:
              "Control structures such as loops and conditionals allow developers to control the flow of the program. Conditionals (if, else if, else, switch) enable decision-making in code, while loops (for, while, do...while) facilitate repeated execution of code blocks. Mastering these structures is vital for handling complex logic and iterations in applications.",
          },
        ],
      },
    },
    technology: {
      descTitle: "Technologies and Extensions of JavaScript",
      image: require("./src/assets/images/js.png"),
      body: {
        introduction:
          "JavaScript is a foundational technology in modern web development, enabling the creation of dynamic, interactive user interfaces and applications. Its versatility and ubiquity have made it integral to both client-side and server-side development, leading to the emergence of numerous frameworks and libraries that enhance its functionality. JavaScript has significantly influenced the development of single-page applications (SPAs), real-time applications, and cross-platform mobile apps, among others.",
        subTitle: "Applications and Technologies Powered by JavaScript:",
        technologies: [
          {
            subTitle: "1. Web Browsers and Front-End Development",
            bullets: [
              {
                bTitle: "React",
                bBody:
                  "A popular library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components and manage the state efficiently.",
              },
              {
                bTitle: "Angular",
                bBody:
                  "A comprehensive framework for building web applications, providing tools for everything from data binding to form validation and routing.",
              },
              {
                bTitle: "Vue.js",
                bBody:
                  "A progressive framework for building user interfaces, known for its simplicity and flexibility in integrating with other projects and libraries.",
              },
            ],
          },
          {
            subTitle: "2. Server-Side Development",
            bullets: [
              {
                bTitle: "Node.js",
                bBody:
                  "An open-source, cross-platform runtime environment that allows JavaScript to be used for server-side scripting. It enables the development of scalable network applications and is particularly well-suited for real-time applications.",
              },
              {
                bTitle: "Express.js",
                bBody:
                  "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's widely used for building RESTful APIs and web servers.",
              },
              {
                bTitle: "Meteor",
                bBody:
                  "A full-stack platform for building web and mobile applications, providing an integrated solution that includes the front-end and back-end, database management, and deployment.",
              },
            ],
          },
          {
            subTitle: "3. Mobile App Development",
            bullets: [
              {
                bTitle: "React Native",
                bBody:
                  "A framework that allows developers to build mobile applications using JavaScript and React. It enables the creation of natively rendered apps for iOS and Android from a single codebase.",
              },
              {
                bTitle: "Ionic",
                bBody:
                  "A complete open-source SDK for hybrid mobile app development. It uses web technologies like HTML, CSS, and JavaScript to build mobile apps.",
              },
            ],
          },
        ],
      },
    },
    bestPractices: {
      descTitle: "get owned idiot",
      body: "code in C instead",
    },
    projects: {
      descTitle: "machine learning",
      body: "recreate chatgpt 4.0",
    },
  },
  {
    title: "React Developer",
    fundamentals: {
      descTitle: "how to react fundameoafjnws?",
      body: "react fundamental blablabla",
      image: require("./src/assets/images/js.png"),
      bullets: [
        {
          bTitle: "Variables and Data Types",
          bBody:
            "Variables are used to store data values, and JavaScript supports various data types such as numbers, strings, booleans, objects, and arrays. Mastering how to declare, initialize, and manipulate variables is crucial for any JavaScript programmer. The let, const, and var keywords are used for variable declaration, each with its own scope and usage rules.",
        },
        {
          bTitle: "Functions",
          bBody:
            "Functions are blocks of code designed to perform specific tasks. They are one of the building blocks of JavaScript, enabling code reusability and modularity. Functions can be declared using function declarations, function expressions, or arrow functions. Understanding how to pass arguments to functions and return values is essential for efficient programming.",
        },
        {
          bTitle: "Control Structures",
          bBody:
            "Control structures such as loops and conditionals allow developers to control the flow of the program. Conditionals (if, else if, else, switch) enable decision-making in code, while loops (for, while, do...while) facilitate repeated execution of code blocks. Mastering these structures is vital for handling complex logic and iterations in applications.",
        },
      ],
    },
    technology: {
      descTitle: "react tech",
      body: "react tech adasd",
    },
    bestPractices: {
      descTitle: "flight reacts",
      body: "sponsored by tiktok",
    },
    projects: {
      descTitle: "make website",
      body: "nah nvm lmao",
    },
  },
  {
    title: "Game Developer",
    fundamentals: {
      descTitle: "creating minecraft lmao",
      body: "jk we are creating valorant",
      image: require("./src/assets/images/js.png"),
      bullets: [
        {
          bTitle: "Variables and Data Types",
          bBody:
            "Variables are used to store data values, and JavaScript supports various data types such as numbers, strings, booleans, objects, and arrays. Mastering how to declare, initialize, and manipulate variables is crucial for any JavaScript programmer. The let, const, and var keywords are used for variable declaration, each with its own scope and usage rules.",
        },
        {
          bTitle: "Functions",
          bBody:
            "Functions are blocks of code designed to perform specific tasks. They are one of the building blocks of JavaScript, enabling code reusability and modularity. Functions can be declared using function declarations, function expressions, or arrow functions. Understanding how to pass arguments to functions and return values is essential for efficient programming.",
        },
        {
          bTitle: "Control Structures",
          bBody:
            "Control structures such as loops and conditionals allow developers to control the flow of the program. Conditionals (if, else if, else, switch) enable decision-making in code, while loops (for, while, do...while) facilitate repeated execution of code blocks. Mastering these structures is vital for handling complex logic and iterations in applications.",
        },
      ],
    },
    technology: {
      descTitle: "how to make rtx for free",
      body: "buy it for 200000 php",
    },
    bestPractices: {
      descTitle: "how to uninstall league of legends",
      body: "[REDACTED]",
    },
    projects: {
      descTitle: "iron golem farm minecraft",
      body: "step 1: lure 3 villagers",
    },
  },
  {
    title: "Cybersecurity",
    fundamentals: {
      descTitle: "how to protect urself online",
      body: "dont go online",
      image: require("./src/assets/images/js.png"),
      bullets: [
        {
          bTitle: "Variables and Data Types",
          bBody:
            "Variables are used to store data values, and JavaScript supports various data types such as numbers, strings, booleans, objects, and arrays. Mastering how to declare, initialize, and manipulate variables is crucial for any JavaScript programmer. The let, const, and var keywords are used for variable declaration, each with its own scope and usage rules.",
        },
        {
          bTitle: "Functions",
          bBody:
            "Functions are blocks of code designed to perform specific tasks. They are one of the building blocks of JavaScript, enabling code reusability and modularity. Functions can be declared using function declarations, function expressions, or arrow functions. Understanding how to pass arguments to functions and return values is essential for efficient programming.",
        },
        {
          bTitle: "Control Structures",
          bBody:
            "Control structures such as loops and conditionals allow developers to control the flow of the program. Conditionals (if, else if, else, switch) enable decision-making in code, while loops (for, while, do...while) facilitate repeated execution of code blocks. Mastering these structures is vital for handling complex logic and iterations in applications.",
        },
      ],
    },
    technology: {
      descTitle: "tech condoms",
      body: "it will protect you",
    },
    bestPractices: {
      descTitle: "dont be careless online",
      body: "give me your bank account info for more",
    },
    projects: {
      descTitle: "how to hack the United States Governmennt",
      body: "do it yourself",
    },
  },
];
