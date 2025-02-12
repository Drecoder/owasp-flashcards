const vulnerabilities = [
    {
      id: 1,
      name: "Injection",
      description: "Attackers inject malicious code (e.g., SQL queries) into input fields to manipulate databases or execute commands.",
      example: "SELECT * FROM users WHERE username = 'admin' --' AND password = ''",
      mitigation: "Use parameterized queries, ORMs (e.g., Sequelize), and input validation.",
    },
    {
      id: 2,
      name: "Cross-Site Scripting (XSS)",
      description: "Attackers inject malicious scripts into web pages viewed by other users.",
      example: "<script>alert('XSS');</script>",
      mitigation: "Sanitize user input, use frameworks like React that auto-escape content, and implement Content Security Policy (CSP).",
    },
    {
      id: 3,
      name: "Cross-Site Request Forgery (CSRF)",
      description: "Attackers trick users into performing actions they didn’t intend to (e.g., changing account settings).",
      example: "Forcing a user to submit a form without their knowledge.",
      mitigation: "Use anti-CSRF tokens, same-site cookies, and validate requests.",
    },
    {
      id: 4,
      name: "Broken Authentication",
      description: "Weak authentication mechanisms allow attackers to compromise passwords, keys, or session tokens.",
      example: "Using weak passwords or storing credentials in plaintext.",
      mitigation: "Implement strong password policies, multi-factor authentication (MFA), and secure session management.",
    },
    {
      id: 5,
      name: "Sensitive Data Exposure",
      description: "Exposing sensitive data (e.g., credit card numbers, passwords) due to weak encryption or misconfigurations.",
      example: "Transmitting data over HTTP instead of HTTPS.",
      mitigation: "Use HTTPS, encrypt sensitive data at rest, and avoid storing unnecessary data.",
    },
    {
      id: 6,
      name: "Security Misconfiguration",
      description: "Default configurations, incomplete setups, or verbose error messages expose vulnerabilities.",
      example: "Leaving debug mode enabled in production.",
      mitigation: "Regularly update software, disable unnecessary features, and use secure defaults.",
    },
    {
      id: 7,
      name: "Insecure Deserialization",
      description: "Attackers manipulate serialized objects to execute arbitrary code or escalate privileges.",
      example: "Sending a malicious serialized object to the server.",
      mitigation: "Avoid deserializing untrusted data and use safe serialization formats.",
    },
    {
      id: 8,
      name: "Using Components with Known Vulnerabilities",
      description: "Using outdated or vulnerable libraries/frameworks.",
      example: "Using an old version of Express.js with known vulnerabilities.",
      mitigation: "Regularly update dependencies and use tools like `npm audit`.",
    },
    {
      id: 9,
      name: "Insufficient Logging and Monitoring",
      description: "Failing to detect and respond to attacks due to poor logging.",
      example: "Not logging failed login attempts.",
      mitigation: "Implement comprehensive logging and monitoring (e.g., using tools like Winston or ELK Stack).",
    },
    {
      id: 10,
      name: "Server-Side Request Forgery (SSRF)",
      description: "Attackers trick the server into making requests to internal resources.",
      example: "Forcing the server to fetch sensitive data from internal APIs.",
      mitigation: "Validate and sanitize user input, and restrict server-side requests.",
    },
  ];
  
  export default vulnerabilities;
