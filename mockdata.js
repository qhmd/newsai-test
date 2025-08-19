const mockNewsData = [
  {
    id: 1,
    title: "OpenAI Releases GPT-4 Turbo with Improved Reasoning Capabilities",
    url: "https://openai.com/news/gpt-4-turbo",
    timestamp: "2024-08-18T08:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=AI",
    source: "api1"
  },
  {
    id: 2,
    title: "Google's Gemini AI Shows Promise in Medical Diagnosis",
    url: "https://google.com/ai/gemini-medical",
    timestamp: "2024-08-18T07:15:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Med",
    source: "api1"
  },
  {
    id: 3,
    title: "Microsoft Copilot Integration Expands to Office Suite",
    url: "https://microsoft.com/copilot-office",
    timestamp: "2024-08-18T06:45:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=MS",
    source: "api1"
  },
  {
    id: 4,
    title: "Meta's LLaMA 3 Achieves New Benchmark in Language Understanding",
    url: "https://meta.com/llama3-benchmark",
    timestamp: "2024-08-18T05:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Meta",
    source: "api1"
  },
  {
    id: 5,
    title: "AI-Powered Drug Discovery Platform Identifies Potential Cancer Treatment",
    url: "https://example.com/ai-drug-discovery",
    timestamp: "2024-08-18T04:20:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Drug",
    source: "api1"
  },
  {
    id: 6,
    title: "Tesla's FSD Beta Shows 40% Improvement in Urban Driving",
    url: "https://tesla.com/fsd-beta-update",
    timestamp: "2024-08-17T23:15:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Tesla",
    source: "api2"
  },
  {
    id: 7,
    title: "Anthropic's Claude 3.5 Demonstrates Advanced Reasoning Skills",
    url: "https://anthropic.com/claude-3-5",
    timestamp: "2024-08-17T22:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Claude",
    source: "api2"
  },
  {
    id: 8,
    title: "AI Chip Demand Drives NVIDIA Stock to New Heights",
    url: "https://nvidia.com/ai-chip-demand",
    timestamp: "2024-08-17T21:45:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=NVDA",
    source: "api2"
  },
  {
    id: 9,
    title: "DeepMind's AlphaFold 3 Predicts Protein Interactions with 95% Accuracy",
    url: "https://deepmind.com/alphafold3",
    timestamp: "2024-08-17T20:10:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Alpha",
    source: "api2"
  },
  {
    id: 10,
    title: "Stability AI Launches Advanced Image Generation Model",
    url: "https://stability.ai/image-generation",
    timestamp: "2024-08-17T19:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Stable",
    source: "api2"
  },
  {
    id: 11,
    title: "Amazon's Alexa Gets Major AI Upgrade with Conversational Memory",
    url: "https://amazon.com/alexa-ai-upgrade",
    timestamp: "2024-08-17T18:45:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Alexa",
    source: "api3"
  },
  {
    id: 12,
    title: "IBM Watson Assists in Climate Change Research Breakthrough",
    url: "https://ibm.com/watson-climate",
    timestamp: "2024-08-17T17:20:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=IBM",
    source: "api3"
  },
  {
    id: 13,
    title: "Baidu's ERNIE Bot Surpasses Human Performance in Chinese Language Tasks",
    url: "https://baidu.com/ernie-performance",
    timestamp: "2024-08-17T16:15:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Baidu",
    source: "api3"
  },
  {
    id: 14,
    title: "Salesforce Einstein GPT Transforms Customer Service Automation",
    url: "https://salesforce.com/einstein-gpt",
    timestamp: "2024-08-17T15:40:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Sales",
    source: "api3"
  },
  {
    id: 15,
    title: "Adobe Firefly AI Creates Photorealistic Images from Text Prompts",
    url: "https://adobe.com/firefly-ai",
    timestamp: "2024-08-17T14:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Adobe",
    source: "api3"
  },
  // Additional data for load more functionality
  {
    id: 16,
    title: "OpenAI Announces Partnership with Educational Institutions Worldwide",
    url: "https://openai.com/education-partnership",
    timestamp: "2024-08-17T13:20:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Edu",
    source: "api1"
  },
  {
    id: 17,
    title: "Google AI Breakthrough in Quantum Computing Error Correction",
    url: "https://google.com/quantum-ai",
    timestamp: "2024-08-17T12:15:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Quantum",
    source: "api1"
  },
  {
    id: 18,
    title: "Microsoft Azure AI Services Expand to 50 New Regions",
    url: "https://azure.microsoft.com/ai-expansion",
    timestamp: "2024-08-17T11:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Azure",
    source: "api1"
  },
  {
    id: 19,
    title: "Meta Introduces AI-Powered Content Moderation System",
    url: "https://meta.com/ai-moderation",
    timestamp: "2024-08-17T10:45:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Mod",
    source: "api1"
  },
  {
    id: 20,
    title: "AI Startup Raises $100M Series B for Healthcare Applications",
    url: "https://example.com/ai-healthcare-funding",
    timestamp: "2024-08-17T09:20:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Health",
    source: "api1"
  },
  {
    id: 21,
    title: "Autonomous Vehicle AI Reduces Accident Rate by 60% in Testing",
    url: "https://example.com/autonomous-safety",
    timestamp: "2024-08-17T08:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Auto",
    source: "api2"
  },
  {
    id: 22,
    title: "AI-Generated Music Platform Launches with Major Label Support",
    url: "https://example.com/ai-music-platform",
    timestamp: "2024-08-17T07:45:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Music",
    source: "api2"
  },
  {
    id: 23,
    title: "Robotics Company Unveils AI-Powered Manufacturing Assistant",
    url: "https://example.com/robotics-manufacturing",
    timestamp: "2024-08-17T06:20:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Robot",
    source: "api2"
  },
  {
    id: 24,
    title: "AI Weather Prediction Model Achieves 95% Accuracy Rate",
    url: "https://example.com/ai-weather-prediction",
    timestamp: "2024-08-17T05:15:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Weather",
    source: "api2"
  },
  {
    id: 25,
    title: "Financial AI Detects $50M in Fraudulent Transactions Monthly",
    url: "https://example.com/ai-fraud-detection",
    timestamp: "2024-08-17T04:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Finance",
    source: "api2"
  },
  {
    id: 26,
    title: "AI Translation Service Adds Support for 100 New Languages",
    url: "https://example.com/ai-translation-expansion",
    timestamp: "2024-08-17T03:45:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Trans",
    source: "api3"
  },
  {
    id: 27,
    title: "Smart City AI Initiative Reduces Traffic Congestion by 40%",
    url: "https://example.com/smart-city-ai",
    timestamp: "2024-08-17T02:20:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=City",
    source: "api3"
  },
  {
    id: 28,
    title: "AI-Powered Agricultural System Increases Crop Yield by 30%",
    url: "https://example.com/ai-agriculture",
    timestamp: "2024-08-17T01:15:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Farm",
    source: "api3"
  },
  {
    id: 29,
    title: "Virtual AI Assistant Helps Students Improve Learning Outcomes",
    url: "https://example.com/ai-education-assistant",
    timestamp: "2024-08-17T00:30:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Learn",
    source: "api3"
  },
  {
    id: 30,
    title: "AI Cybersecurity Platform Prevents 99.9% of Advanced Threats",
    url: "https://example.com/ai-cybersecurity",
    timestamp: "2024-08-16T23:45:00Z",
    image: "https://via.placeholder.com/80x60/1e3a8a/ffffff?text=Cyber",
    source: "api3"
  }
];