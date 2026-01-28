import location from "../location.png";
import mail from "../mail.png";
import phone from "../phone-call.png";
import cursor from "../cursor.svg";
import boticon from "../BotIcon.svg";
import customericon from "../customericon.svg";
import plus from "../plus.png";
import oper from "../t.png";
import mess from "../p.png";
import cus from "../supplier.png";
import like from "../lik.png";
import {
  FbCard1,
  FbCard2,
  FbCard3,
  FbCard4,
  FbCard5,
  FbCard6,
  FbCard7,
  FbCard8,
  FbCard9,
  FbCard10,
  FbCard11,
  FbCard12,
  FbCard13,
  FbCard14,
  FbCard15,
  FbCard16,
  FbCard17,
  FbCard18,
} from "../svg";

export const en = {
  nav: {
    li1: "INTRODUCTION",
    li2: "PRICING",
    li3: "HELP",
  },
  navIntroduction: [
    {
      id: 0,
      type: "Facebook introduction",
      route: "facebook",
    },
    {
      id: 1,
      type: "Instagram introduction",
      route: "instagram",
    },
  ],

  facebookIntroTitle: "CORE SERVICE",
  facebookIntroSubtitle: "Бидний системийн боломжууд",

  fb_card: [
    {
      title: "Information Setup",
      desc: "Share information in multiple formats including images, text, videos, files, and links.",
      icon: FbCard1,
    },
    {
      title: "Online Shop",
      desc: "Display products by category, announce discounts, add items to cart, provide detailed information, and create collections.",
      icon: FbCard2,
    },
    {
      title: "Comment Reply",
      desc: "Automatically reply to comments on Facebook Page posts and send detailed information via chat.",
      icon: FbCard3,
    },
    {
      title: "Interactive Conversations",
      desc: "Detect keywords from text and send appropriate responses.",
      icon: FbCard4,
    },
    {
      title: "Payment Integration",
      desc: "Accept payments through local payment systems such as QPay, SocialPay, and MonPay.",
      icon: FbCard5,
    },
    {
      title: "Online Contract",
      desc: "Gather required contract information from users anywhere and email it to the organization.",
      icon: FbCard6,
    },
    {
      title: "Custom Message",
      desc: "Automatically deliver follow-up messages to users after a set time based on button clicks.",
      icon: FbCard7,
    },
    {
      title: "Calculation",
      desc: "By integrating material calculation formulas into the chatbot, you save users’ time and provide the necessary information online.",
      icon: FbCard8,
    },
    {
      title: "Questionnaire Form",
      desc: "User feedback, survey data, and information are collected through two-way chat interactions.",
      icon: FbCard9,
    },
    {
      title: "Webform",
      desc: "Questionnaires are completed via pop-up forms, and responses can be monitored through the system’s dashboard.",
      icon: FbCard10,
    },
    {
      title: "View Reports",
      desc: "User traffic and activity reports can be filtered by year, month, and day, and downloaded as Excel files.",
      icon: FbCard11,
    },
    {
      title: "DAN System",
      desc: "Users can proceed to the next step after being verified through the E-Mongolia integrated government e-service system.",
      icon: FbCard12,
    },
    {
      title: "Hubspot Integration",
      desc: "Integrates with internal systems used by organizations, such as HubSpot, Google Sheets, and Google Calendar.",
      icon: FbCard13,
    },
    {
      title: "Mass Message",
      desc: "Sends advertisements and announcements to all users who have interacted with the chatbot within the last 24 hours.",
      icon: FbCard14,
    },
    {
      title: "Delivery System",
      desc: "Automatically sends order details to the delivery company after payment for quick delivery.",
      icon: FbCard15,
    },
    {
      title: "Account Manager",
      desc: "A dedicated account manager is assigned from the start of the contract and provides continuous support and communication.",
      icon: FbCard16,
    },
    {
      title: "User System",
      desc: "Manage user access and permissions for bot system users.",
      icon: FbCard17,
    },
    {
      title: "System Integration",
      desc: "Provides custom development upon request and connects the chatbot with the organization’s internal systems.",
      icon: FbCard18,
    },
  ],

  insta_card: [
    {
      title: "Information Setup",
      desc: "Share information in multiple formats including images, text, videos, files, and links.",
      icon: FbCard1,
    },
    {
      title: "Online Shop",
      desc: "Display products by category, announce discounts, add items to cart, provide detailed information, and create collections.",
      icon: FbCard2,
    },
    {
      title: "Comment Reply",
      desc: "Automatically reply to comments on Facebook Page posts and send detailed information via chat.",
      icon: FbCard3,
    },
    {
      title: "Payment Integration",
      desc: "Accept payments through local payment systems such as QPay, SocialPay, and MonPay.",
      icon: FbCard5,
    },
    {
      title: "Online Contract",
      desc: "Gather required contract information from users anywhere and email it to the organization.",
      icon: FbCard6,
    },
  ],

  highlight: [
    { src: oper, label: "24/7 Automation" },
    { src: mess, label: "Professional development program" },
    { src: cus, label: "Account manager" },
    { src: like, label: "User-friendly service" },
  ],

  phoneScreen: "HOW THE SYSTEM WORKS?",
  howChatbot: "How to start with a chatbot?",

  steps: [
    {
      title: "Step 1",
      description:
        "Explore our services and choose the package that fits your business.",
    },
    {
      title: "Step 2",
      description: "Contact a account manager to set up a service agreement.",
    },
    {
      title: "Step 3",
      description:
        "After completing your chatbot in the testing environment, connect it to your Facebook page and launch it.",
    },
  ],

  stastic: [
    {
      id: 0,
      type: "Visitors to Chatbot",
      icon: cursor,
      count: "10.556.655",
      plus: null,
    },
    {
      id: 1,
      type: "Developed bot",
      icon: boticon,
      count: "13.556",
      plus: null,
    },
    {
      id: 2,
      type: "Businesses and customers",
      icon: customericon,
      count: "600",
      plus: plus,
    },
    {
      id: 3,
      type: "Advertising content",
      icon: boticon,
      count: "400",
      plus: plus,
    },
  ],

  featuresTitle: "KEY FEATURE",

  featuresHome: [
    {
      title: "In-chatbot sales",
      desc: "Sell products directly through the chatbot’s online shop, integrated with local payment systems like SocialPay, QPay, and MonPay.",
    },
    {
      title: "Online Contract",
      desc: "Gather required contract information from users anywhere and email it to the organization.",
    },
    {
      title: "Access report",
      desc: "Download user activity reports to Excel, filtered by date since the bot was connected to the Facebook page.",
    },
    {
      title: "Calculation",
      desc: "By integrating material calculation formulas into the chatbot, you save users’ time and provide the necessary information online.",
    },
    {
      title: "Automatically reply to posts.",
      desc: "Automatically reply to comments on Facebook posts and send detailed information via chat.",
    },
    {
      title: "Custom development services",
      desc: "Integrate with the organization’s internal systems and develop custom solutions tailored to their operations.",
    },
  ],

  AiChatHelp: "HOW CAN WE HELP YOU?",
  AiQuasion: "Ask a anything",
  AiSuggestions1: "How do I sign the contract online?",
  AiSuggestions2: "How much does the AI chatbot service cost?",
  AiSuggestions3: "How can we help you?",

  chatbotTest: "TRY CHATBOT",
  chatbotText: "GET STARTED EASILY WITH YOUR CHATBOT IN YOUR NATIVE LANGUAGE!",

  price: [
    {
      id: 0,
      name: "Pro",
      price: "300,000₮",
      description:
        "Customize your solution by selecting add-on menu options specific to your business operations.",
      highlight: false,
    },
    {
      id: 1,
      name: "Enterprise",
      price: "900,000₮",
      description: "Empower your business with unlimited access to all chatbot features.",
      highlight: true,
    },
    {
      id: 2,
      name: "VIP",
      price: "Custom Pricing",
      description:
        "Develop custom integrations with your operational systems",
      highlight: false,
    },
  ],
  priceMonth: "1 month",
  PriceAdd: "Add on",
  priceTitle2: "Core Features",

    features: [
  { label: "Content Management", sub: null , values: [true, true, true] },
  { label: "Conversations", sub: null , values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "User Segmentation", sub: null , values: [true, true, true] },
  { label: "HubSpot Integration", sub: null , values: [true, true, true] },
  { label: "Dedicated Account Manager", sub: null , values: [true, true, true] },
  { label: "Analytics & Reporting", sub: null , values: [true, true, true] },
  { label: "Monitoring", sub: null , values: [true, true, true] },
  { label: "Payment Integration", sub: "Qpay SocialPay Monpay" , values: [false, true, false] },
  { label: "Mass Messaging", sub: null , values: [true, true, true] },
  { label: "Web Forms", sub: null , values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Inquiry Forms", sub: null , values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "HTML Field", sub: null , values: [true, true, true] },
  { label: "Custom Messages", sub: null , values: [false, true, false] },
  { label: "Online Store", sub: null , values: [false, true, true] },
  { label: "Comment Management", sub: null , values: [true, true, true] },
  { label: "Live agent", sub: null , values: [true, true, true] },
  { label: "Online Contract", sub: null , values: [true, true, true] },
  { label: "Calculation",  sub: null ,values: [true, true, true] },
  { label: "DAN System Integration", sub: null , values: [true, true, true] },
  { label: "System Integration", sub: null , values: [true, true, true] },
],
  
  priceCTA:
    "Contact our sales manager for personalized guidance on selecting the right plan for your industry, company, and needs.",
  priceComment: "An Overview of Our System’s",
  faqHeader: "FREQUENTLY ASKED QUESTIONS",
  
  faq: [
    {
      id: 0,
      title: "How to create a bot?",
      description:
        "If you are accessing chatbot.mn for the first time, please sign up, and if you are a returning user, click login. One user can create five bots for free. Try the PRO package for a month, then automatically switch to the FREE plan.",
    },
    {
      id: 1,
      title: "How to connect a bot?",
      description:
        "Any person with Facebook page admin rights has the right to connect or disconnect the chatbot. Click the connect button => EDIT SETTINGS => login => choose your page => change all the settings to YES and click DONE.",
    },
    {
      id: 2,
      title: "What to do if token expired?",
      description: `ADMIN RIGHTS ON FACEBOOK PAGE, PASSWORD, ADMIN CHANGES RESULT IN token expired ERROR. So, you need to \n1. Log into the dashboard \n2. Go to the settings menu \n3. Press the clear button \n4. Press the Facebook connect button \n5. Choose your page and connect,`,
    },
    {
      id: 3,
      title: "How to renew your subscription? What happens if I don't renew?",
      description:
        "In the top right corner of the dashboard, you can click on the plans option. This will allow you to renew your bot or add extra paid services. After making your choice, you'll receive an invoice or can pay directly using a QR code to renew your bot.",
    },
  ],
  productHeader: "EXTRA FEATURES",
  productHeader2: "Advantages",
  button: {
    signin: "Log In",
    signup: "Sign Up",
    download: "Download Introduction",
    free: "Try it out",
    priceCTA: "Send a consulting request",
    dashboard: "Dashboard",
    logout: "Log out",
  },
  termTitle: "Terms of Service",
  Feedback: "Feedback",
  termList: [
    {
      header: "General conditions",
      desc: [
        {
          d: "The Chatbot.mn customer answering system is an official service provided by “Chatbot” LLC, and the purpose of these terms of service is to regulate the rights and obligations of the parties when users use the system's services.",
          d1: [],
        },
        {
          d: "These Terms of Service will be valid from the time the user registers or creates an account in the system until it is closed.",
          d1: [],
        },
      ],
    },
    {
      header: "Points to note by the user",
      desc: [
        {
          d: "The Chatbot.mn system can connect with popular global messenger platforms like Facebook Messenger, WeChat, Whatsapp, Telegram, Viber, and Line. Currently, it's connected to the Facebook Messenger channel.",
          d1: [],
        },
        {
          d: "The information and conversations shared by the user through their self-created bot are considered private exchanges solely between the user and the messenger user. “Chatbot” LLC does not hold any legal responsibility for these interactions.",
          d1: [],
        },
        {
          d: "Chatbot LLC is entirely responsible for maintaining the confidentiality of all data generated within the Chatbot.mn system, which includes user accounts, bot information, and messenger user conversations. We commit not to disclose this information to third parties, except when required by law.",
          d1: [],
        },
        {
          d: "A user can make multiple bots on their account, but each bot can only be linked to one Facebook page.",
          d1: [],
        },
        {
          d: "To connect the bot they created to a Facebook page, the user needs admin rights for that page.",
          d1: [],
        },
        {
          d: "While using the system's created bot, the user is not allowed to engage in the following prohibited activities during conversations with messenger users. Includes:",
          d1: [
            "Please refrain from submitting or distributing fraudulent, defamatory, derogatory, insulting, or copyright-infringing information.",
            "Publishing confidential information of any organization or individual without proper permission",
            "Ask messenger users for private and personal financial secret information without permission",
            "Doing any act prohibited by the laws and regulations of Mongolia",
            "Use for election purposes is prohibited.",
          ],
        },
        {
          d: "The user-created bot within the Chatbot.mn system operates by exchanging information with the connected Facebook Messenger platform. Therefore, it is the user's responsibility to adhere strictly to the terms of service and privacy rules of the Facebook Messenger platform. If the user engages in an activity that does not comply with the terms of service of the Facebook Messenger platform, measures will be taken until the bot is deactivated.",
          d1: [],
        },
        {
          d: "The user is responsible for protecting the login password of the Chatbot.mn system and the user information from others, and is responsible for preventing any risks that may arise from the non-fulfillment of this responsibility. “Chatbot” LLC will not be responsible for the loss caused by this.",
          d1: [],
        },
        {
          d: "If the user believes that the privacy of their account lost to others, please change the password or contact us urgently at info@chatbot.mn or 7744-1616.",
          d1: [],
        },
      ],
    },
    {
      header: "Purchase and cancellation of paid services",
      desc: [
        {
          d: "The Chatbot.mn system provides both free features and paid services to users.",
          d1: [],
        },
        {
          d: "To access the paid feature, users are required to enable the paid service for their bot and sign a postpaid service agreement.",
          d1: [],
        },
        {
          d: "The pricing for the paid service can be found on the Chatbot.mn website and will depend on the monthly user count and chosen paid service.",
          d1: [],
        },
        {
          d: "The user can activate the paid service for each bot they create, and the service fee is calculated individually for each bot.",
          d1: [],
        },
        {
          d: "The billing for the service in a particular month will be automatically calculated on the 1st of the following month and sent to the user's registered email. Payment must be made by the 20th of the following month. Failure to make the payment by the 20th of the following month will result in the user losing access to the paid service features of the bot.",
          d1: [],
        },
        {
          d: "At any time, the user can cancel the paid service. If canceled, the user will receive invoices up to the service cancellation date.",
          d1: [],
        },
        {
          d: "Upon canceling paid services, the paid features will be disabled, but the free features will continue to be available.",
          d1: [],
        },
        {
          d: "The customer will automatically switch to the Free package when the paid package expires, and the chatbot service menus will be limited when switching. Advertisements will also be sent periodically during a user's access to the Chatbot Service.",
          d1: [],
        },
      ],
    },
    {
      header: "Disconnect messenger, delete chatbot and close account",
      desc: [
        {
          d: "The user can disconnect or connect the bot to a Facebook page at any time. In case of disconnection, the conversation history and messenger user data related to that Facebook messenger will be deleted. After disconnecting the bot from your Facebook page, you can choose to connect it to a new Facebook page.",
          d1: [],
        },
        {
          d: "The user can delete the bot they created. In this case, all information related to the bot, including message blocks, conversations, and user data, will be deleted.",
          d1: [],
        },
        {
          d: "If there is an unpaid invoice on the bot created by the user, the bot cannot be deleted.",
          d1: [],
        },
        {
          d: "The user has the possibility to close their account on the Chatbot.mn, and in this case, all bots and all information related to the bot will be deleted.",
          d1: [],
        },
        {
          d: "If there is any unpaid invoice on the user's account, the account cannot be closed.",
          d1: [],
        },
      ],
    },
    {
      header: "Other",
      desc: [
        {
          d: "These terms of service may undergo additional changes based on Chatbot LLC's operational updates. In the event of such changes, all users receiving the service will be notified in advance.",
          d1: [],
        },
        {
          d: 'The Chatbot.mn system is registered on the official site of the Communications Regulatory Commission in the name of "Chatbot" LLC. The copyright of the Chatbot.mn website and system is legally protected.',
          d1: [],
        },
      ],
    },
  ],
  privacyTitle: "Privacy Policy",
  privacyList: [
    {
      header: "General and Data Collection",
      desc: [
        {
          d: 'chatbot.mn smart chatbot creation platform (hereinafter referred to as "System") collects information of citizens and legal entities (hereinafter referred to as "Users") and their Facebook page users (hereinafter referred to as "Chatbot Users") in the following cases. It includes:',
          d1: [
            {
              d2: "A user can be an individual or a legal entity who accesses the chatbot.mn web system, creates an account, establishes a connection with their Facebook page with administrative rights, and installs a chatbot that automatically responds to chatbot users.",
              d3: [],
            },
            {
              d2: "A 'Chatbot User' refers to the end users who are connected with the auto-reply chatbot after clicking the “Send Message” button and other “Facebook Chat Plugin” on the User's connected Facebook page.",
              d3: [],
            },
            {
              d2: "When registering in the system, the user enters his email, last name, first name, phone number, and password, and the system encrypts the password created by the user using cryptographic methods without human intervention. The password is stored in the database, which is not readable.",
              d3: [],
            },
            {
              d2: "Also, the user logs in with their Facebook account to connect to their Facebook page, and at this time, the system collects the user's last name, first name, email address, date of birth, and gender with open settings, as well as Facebook App ID and Access Token information necessary to connect to the page is collected from Facebook with the user's permission.",
              d3: [],
            },
            {
              d2: "The chatbot user will register in the system after interacting with the autoresponder chatbot created by the user. Approved personal information, including last name, first name, email, phone number, birthday, age, gender, and 'Facebook PSID' (Page Scoped ID), will be stored in the system.",
              d3: [],
            },
            {
              d2: "When the user utilizes the system's payment and online shop features, it is necessary to enter and save the company's certificate, ID card copy, and account information in the system.",
              d3: [],
            },
          ],
        },
      ],
    },
    {
      header: "Terms of use of information",
      desc: [
        {
          d: "All information entered into the user and chatbot user system is the individual property of each and “Chatbot” LLC will not use it in any form other than the agreed conditions without the consent of the User and Chatbot User.",
          d1: [
            {
              d2: "For the User:",
              d3: [
                "chatbot.mn can check payment and order information for cloud services, send notifications related to them, and make service payments (with the User's permission).",
                "Provide customer service related to the User (with the User's permission)",
                "Carry out technical maintenance related to customers. (With User's permission)",
                "Deliver information about new products and discounts to users (With User's permission)",
                "To enhance the quality of the chatbot.mn service and introduce new features to the market, Chatbot LLC may collect and use non-confidential information from individuals and legal entities, employing statistical methods related to chatbots and chatbot-related information.",
              ],
            },
            {
              d2: "For the Chatbot User:",
              d3: [
                "The system will send messages using the “Facebook PSID” of the chatbot user to communicate with the chatbot user",
                "The user will utilize their chatbot user information to share details about their business, send information about products and services (referred to as 'Message Broadcasting'), or send mass messages within the guidelines approved by Facebook.",
                "The user will use the system to provide customer service and other services to its chatbot users.",
              ],
            },
          ],
        },
      ],
    },
    {
      header: "Sharing User Information",
      desc: [
        {
          d: "",
          d1: [
            {
              d2: "Only in the event that information is required to be provided by the state authorities in accordance with the laws of Mongolia",
              d3: [],
            },
          ],
        },
      ],
    },
    {
      header: "Storing User Data",
      desc: [
        {
          d: "",
          d1: [
            {
              d2: "User registration details, chatbot information, chatbot user information, conversation history, and all other data generated within the chatbot.mn system are securely stored in Chatbot LLC's Mobinet LLC data center, ensuring a high level of confidentiality and security.",
              d3: [],
            },
            {
              d2: "The user is responsible for not disclosing the login name and password to others.",
              d3: [],
            },
            {
              d2: "Chatbot LLC will not be responsible for any harm or damage caused to the user's chatbot due to lost access rights to others. Chatbot LLC advises that accessing information using the user's access rights is impossible.",
              d3: [],
            },
          ],
        },
      ],
    },
    {
      header: "Manage User Information",
      desc: [
        {
          d: "",
          d1: [
            {
              d2: "Users can change their personal and company information at any time they want from the system dashboard.",
              d3: [],
            },
            {
              d2: "If the user disconnects their chatbot from the Facebook page, the autoresponder will disabled, and the information will be stored in the system until reactivated.",
              d3: [],
            },
            {
              d2: "When the user deletes their chatbot, all chatbot and chatbot user data will be permanently erased from the system and cannot be restored.",
              d3: [],
            },
            {
              d2: "If the user deactivates his account information, it will be stored in the system until it is deactivated again.",
              d3: [],
            },
            {
              d2: "If the user intends to delete their registration information, they should send a request to the email address info@chatbot.mn, and we will remove the registration information from the chatbot.mn system within 3-5 business days.",
              d3: [],
            },
          ],
        },
      ],
    },
    {
      header: "Privacy Policy Update",
      desc: [
        {
          d: "",
          d1: [
            {
              d2: "“Chatbot” LLC has the right to make changes to the Privacy Policy. In case changes are made to the Privacy Policy, it will be publicly published on the chatbot.mn website and the User has a responsibility to get acquainted.",
              d3: [],
            },
          ],
        },
      ],
    },
  ],

  footer: {
    title: "TRY CHATBOT FOR FREE",
    subtitle: "GET STARTED EASILY WITH YOUR CHATBOT IN YOUR NATIVE LANGUAGE",
    col1: "CHATBOT",
    row1: "About Us",
    row2: "FAQ",
    row3: "Chatbot User Group",
    row4: "CONTACT US",
    col2: "PRODUCT",
    row5: "Bot Development",
    row6: "Empowerment Training",
    row7: "Service Plans",
    row8: "Customer Service",
    col3: "HELP",
    row9: "Guide",
    row10: "Online Consultation",
    row11: "Manual",
    row12: "Template",
    copyright: "All rights reserved",
    address:
      "Ambassador Office, 1st Floor, Room 104, Sukhbaatar District, Ulaanbaatar",
    year: "year",
    ai: "Орчин үеийн бизнесийг AI-аар бүтээх, түгээх хамгийн ухаалаг арга.",
  },

  input: {
    email: "Email",
    pwd: "Password",
    pwdCheck: "Confirm Password",
    lName: "Last Name",
    fName: "First Name",
    phone: "Phone",
    forgot: "Forgot Password?",
    remember: "Remember Me",
    signinif: "Already have an account?",
    signupif: "If you don't have an account",
    signupifLink: "SIGN UP HERE.",
    or: "Or",
    acceptTerm: 'CLICK "SIGN UP" TO CREATE AN ACCOUNT',
    acceptTerm2: "AGREE",
    forgotTitle: "ENTER YOUR REGISTERED EMAIL",
    forgotButton: "Reset Password",
    button: "Sign in with Facebook",
    privacy: "I confirm that I have read and agree to the Privacy Policy",
    checkPrivacy: "Please agree to the Privacy Policy.",
    term: "Please agree to the Terms of Service.",
    label1: "Enter Email",
    label2: "Enter Password",
    label3: "Enter Last Name",
    label4: "Enter First Name",
    label5: "Enter Phone Number",
    label6: "Passwords must match",
    label7: "I agree to the Terms and Conditions",
    label8:
      " I confirm that I am 18 years old or older and have read and agree to the Terms of Service",
    label9: "Password must be at least 8 characters long",
  },
};
