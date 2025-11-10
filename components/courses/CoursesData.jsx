const { Award, BookOpen, Briefcase, Users, FileBadge, Layers, Handshake, GraduationCap, Wallet, BarChart3 } = require("lucide-react");
const data = [
    {
        heading: "Basic Digital Marketing Course",
        slug: "basic-digital-marketing-course",
        mainImage: "/home/course1.webp",
        heroList: [
            "Learn from Industry Experts with real-world campaign experience",
            "Hands-on Training with live projects and case studies",
        ],
        join: "Join 15k+ Digital Achiever",
        courseFee: "9,999",
        duration: "30",
        keyFeature: [
            {
                icon: <Award className="w-10 h-10 " />,
                heading: "Esteemed Credentials",
                description: "Get a recognized Digital Marketing Certificate after completing the course, valid for jobs & freelancing."
            },
            {
                icon: <Handshake className="w-10 h-10 " />,
                heading: "Hands-on Training",
                description: "Work on live projects & practical assignments to gain real-world experience."
            },
            {
                icon: <GraduationCap className="w-10 h-10 " />,
                heading: "Beginner-Friendly Curriculum",
                description: "No prior experience needed – we start from scratch and make you job-ready."
            },
            {
                icon: <BookOpen className="w-10 h-10 " />,
                heading: "Expert Faculty",
                description: "Learn directly from industry professionals with years of digital marketing experience."
            },
            {
                icon: <Wallet className="w-10 h-10 " />,
                heading: "Affordable Learning",
                description: "Get quality training at an affordable fee with flexible payment options."
            },
            {
                icon: <BarChart3 className="w-10 h-10 " />,
                heading: "Career Growth Support",
                description: "Get guidance for freelancing, job opportunities, and building your online career."
            },
        ],

        Experience: [
            {
                heading: "Foundations of Digital Marketing",
                description: "Explore the basics of digital marketing, how it works, and why it’s important for businesses today.",
                Topics: [
                    "Introduction to Digital Marketing",
                    "Traditional vs Digital Marketing",
                    "Career Opportunities",
                    "How Businesses Use Digital Marketing"
                ],

                skills: [
                    "Strong Foundation in Digital Marketing",
                    "Understanding of Online Business Growth",
                    "Basic Strategy Planning"
                ]
            },

            {
                heading: "Social Media for Growth",
                description: "Master social media channels to grow brands and engage customers effectively.",
                Topics: [
                    "Facebook & Instagram Marketing",
                    "LinkedIn for Professionals",
                    "YouTube & Twitter Marketing",
                    "Social Media Content Creation"
                ],

                skills: [
                    "Social Media Campaign Management",
                    "Content Creation & Engagement",
                    "Brand Building on Social Platforms"
                ]
            },

            {
                heading: "SEO Strategy & Optimization",
                description: "Learn how to rank websites on Google using proven SEO techniques.",
                Topics: [
                    "On-Page SEO (Meta Tags, Keyword Placement, Content Optimization)",
                    "Off-Page SEO (Backlinks, Guest Posting, Social Bookmarking)",
                    "Technical SEO Basics",
                ],

                skills: [
                    "Website Optimization",
                    "Ranking Skills",
                    "Keyword Research",
                    "Link Building"
                ]
            },
        ],

        comparison: [
            {
                icon: <Award className="w-5 h-5 text-gray-700" />,
                title: "Institutional Prestige",
                rankmantra: "Backed by industry experts",
                others: "Recognised but less credible",
            },
            {
                icon: <BookOpen className="w-5 h-5 text-gray-700" />,
                title: "Curriculum",
                rankmantra: "Covers SEO, SMM, SEM, Content & Analytics",
                others: "Mostly basics, limited practical",
            },
            {
                icon: <Briefcase className="w-5 h-5 text-gray-700" />,
                title: "Hands-on Projects",
                rankmantra: "6+ live projects & case studies",
                others: "Few projects, less real-world exposure",
            },
            {
                icon: <Users className="w-5 h-5 text-gray-700" />,
                title: "Recruitment & Outcomes",
                rankmantra: "Job & freelance opportunities",
                others: "Limited placement support",
            },
            {
                icon: <FileBadge className="w-5 h-5 text-gray-700" />,
                title: "Program credentials",
                rankmantra: "Recognized certificate",
                others: "Few or generic certificates",
            },
            {
                icon: <Layers className="w-5 h-5 text-gray-700" />,
                title: "Specialisations",
                rankmantra: "Multiple marketing options",
                others: "Very few or none",
            },
        ],
        cost: {
            price: "333 per day",
            list: [
                "Learn core digital marketing skills in 30 days",
                "Hands-on training with real projects",
                "Practical exposure to SEO, SMM, SEM & more",
                "Certificate on course completion"
            ]
        },

        faqs: [
            {
                question: "How long is this course?",
                answer:
                    "The course duration is 1 to 1.5 months with practical training sessions.",
            },
            {
                question: "Do I need any technical knowledge?",
                answer:
                    "No, this course is designed for beginners, and no prior experience is required.",
            },
            {
                question: "Will I get a certificate?",
                answer:
                    "Yes, you will receive a recognized digital marketing certification after completing the course.",
            },
            {
                question: "What is the course fee?",
                answer:
                    "The course fee is affordable, and we also provide flexible payment options. Contact us for detailed pricing.",
            },
            {
                question: "Can I get a job after this course?",
                answer:
                    "Yes, we offer job assistance and guidance to help you start your digital marketing career.",
            },
        ]
    },
    {
        heading: "Advance Digital Marketing Course",
        slug: "advance-digital-marketing-course",
        mainImage: "/home/course2.webp",
        heroList: [
            "Learn from Industry Experts with real-world campaign experience",
            "Hands-on Training with live projects and case studies",
        ],
        join: "Join 20,000+ Digital Achievers",
        courseFee: "25,000",
        duration: "90",
        keyFeature: [
            {
                icon: <Award className="w-10 h-10 " />,
                heading: "Recognized Certification",
                description: "Earn a certificate in Advance Digital Marketing, valid for jobs & freelancing."
            },
            {
                icon: <Handshake className="w-10 h-10 " />,
                heading: "Hands-on Training",
                description: "Work on live projects and real-world campaigns."
            },
            {
                icon: <GraduationCap className="w-10 h-10 " />,
                heading: "Comprehensive Curriculum",
                description: "Covers advanced SEO, PPC, Social Media, Content Marketing, Email Marketing & Analytics."
            },
            {
                icon: <BookOpen className="w-10 h-10 " />,
                heading: "Expert Faculty",
                description: "Learn from industry professionals with extensive campaign experience."
            },
            {
                icon: <Wallet className="w-10 h-10 " />,
                heading: "Affordable Learning",
                description: "Quality training at ₹40,000 with easy payment options."
            },
            {
                icon: <BarChart3 className="w-10 h-10 " />,
                heading: "Career Growth Support",
                description: "Guidance for jobs, freelancing, and building a strong digital marketing career."
            },
        ],

        Experience: [
            {
                heading: "Experience a Top-Tier Curriculum",
                description: "Learn the foundations of advanced digital marketing, how campaigns work, and why data-driven strategies are crucial for business growth.",
                Topics: [
                    "Introduction to Advanced Digital Marketing",
                    "SEO, PPC & Social Media Campaigns",
                    "Content Marketing & Email Automation",
                    "Analytics, CRO & ROI Measurement"
                ],

                skills: [
                    "Strong foundation in advanced digital marketing strategies",
                    "Mastering SEO, PPC, Social Media & Email campaigns",
                    "Data analysis for performance improvement",
                    "Campaign strategy planning & optimization"
                ]
            },

            {
                heading: "Social Media for Growth",
                list: [
                    "Plan and execute organic and paid campaigns on Facebook, Instagram, LinkedIn & Twitter",
                    "Learn targeting, audience segmentation, and ad performance tracking",
                    "Leverage social media for brand growth and lead generation"
                ],

            },
            {
                heading: "PPC & Campaign Optimization",
                list: [
                    "Run high-converting Google Ads, Meta Ads, and LinkedIn campaigns",
                    "Optimize budgets, bids, and creatives for maximum ROI",
                    "Analyze campaign data and implement strategies for improved performance"
                ]
            },
        ],

        comparison: [
            {
                icon: <Award className="w-5 h-5 text-gray-700" />,
                title: "Reputation",
                rankmantra: "Backed by industry experts in Advanced Digital Marketing",
                others: "Recognised but less credible",
            },
            {
                icon: <BookOpen className="w-5 h-5 text-gray-700" />,
                title: "Curriculum",
                rankmantra: "Covers SEO, PPC, Social Media, Content Marketing, Email & Analytics",
                others: "Mostly basics, limited practical exposure",
            },
            {
                icon: <Briefcase className="w-5 h-5 text-gray-700" />,
                title: "Projects",
                rankmantra: "6+ live projects & case studies",
                others: "Few projects, less real-world exposure",
            },
            {
                icon: <Users className="w-5 h-5 text-gray-700" />,
                title: "Career Support",
                rankmantra: "Job & freelance guidance",
                others: "Limited placement support",
            },
            {
                icon: <FileBadge className="w-5 h-5 text-gray-700" />,
                title: "Certification",
                rankmantra: "Recognized Advance Digital Marketing certificate",
                others: "Few or generic certificates",
            },
            {
                icon: <Layers className="w-5 h-5 text-gray-700" />,
                title: "Specialisations",
                rankmantra: "Multiple advanced marketing options",
                others: "Very few or none",
            },
        ],
        cost: {
            price: "8,333 per month",
            list: [
                "Learn core advanced digital marketing skills in 3 months",
                "Hands-on training with live projects and case studies",
                "Practical exposure to SEO, PPC, Social Media, Email Marketing & Analytics",
                "Certificate on course completion"
            ]
        },

        faqs: [
            {
                question: "How long is this course?",
                answer:
                    "The course duration is 1 to 1.5 months with practical training sessions.",
            },
            {
                question: "Do I need any technical knowledge?",
                answer:
                    "No, this course is designed for beginners, and no prior experience is required.",
            },
            {
                question: "Will I get a certificate?",
                answer:
                    "Yes, you will receive a recognized digital marketing certification after completing the course.",
            },
            {
                question: "What is the course fee?",
                answer:
                    "The course fee is affordable, and we also provide flexible payment options. Contact us for detailed pricing.",
            },
            {
                question: "Can I get a job after this course?",
                answer:
                    "Yes, we offer job assistance and guidance to help you start your digital marketing career.",
            },
        ]
    },
    {
        heading: "Performance Marketing Course",
        slug: "performance-marketing-course",
        mainImage: "/home/course3.webp",
        heroList: [
            "Learn from Industry Experts with real-world campaign experience",
            "Hands-on Training with live paid advertising projects",
        ],
        join: "Join 20,000+ Digital Achievers",
        courseFee: " 15,000",
        duration: "45",
        keyFeature: [
            {
                icon: <Award className="w-10 h-10 " />,
                heading: "Recognized Certification",
                description: "Earn a certificate in Performance Marketing, valid for jobs & freelancing."
            },
            {
                icon: <Handshake className="w-10 h-10 " />,
                heading: "Hands-on Training",
                description: "Work on live ad campaigns & practical projects."
            },
            {
                icon: <GraduationCap className="w-10 h-10 " />,
                heading: "Beginner-Friendly Curriculum",
                description: "No prior experience required; start from scratch."
            },
            {
                icon: <BookOpen className="w-10 h-10 " />,
                heading: "Expert Faculty",
                description: "Learn from industry professionals with real campaign experience."
            },
            {
                icon: <Wallet className="w-10 h-10 " />,
                heading: "Affordable Learning",
                description: "Quality training at ₹25,000 with easy payment options."
            },
            {
                icon: <BarChart3 className="w-10 h-10 " />,
                heading: "Career Growth Support",
                description: "Guidance for jobs, freelancing, and career growth in performance marketing."
            },
        ],

        Experience: [
            {
                heading: "Experience a Top-Tier Curriculum",
                description: "Learn the foundations of performance marketing, how paid campaigns work, and why ROI-driven advertising is crucial for businesses today.",
                Topics: [
                    "Introduction to Performance Marketing",
                    "Paid Advertising vs Traditional Marketing",
                    "Career Opportunities in Performance Marketing",
                    "How Businesses Use Paid Campaigns to Grow"
                ],

                skills: [
                    "Strong foundation in paid advertising",
                    "Understanding ROI-focused campaigns",
                    "Basic campaign strategy planning",
                    "Social media ads & PPC optimization"
                ]
            },

            {
                heading: "Social Media for Growth",
                list: [
                    "Create and optimize paid campaigns on Facebook, Instagram, LinkedIn & Twitter",
                    "Learn targeting, A/B testing, and ad performance tracking",
                    "Understand audience segmentation to boost ROI"
                ],

            },
            {
                heading: "PPC & Campaign Optimization",
                list: [
                    "Run high-converting Google Ads and Meta Ads campaigns",
                    "Optimize bids, budgets, and ad creatives",
                    "Track performance and improve campaign ROI"
                ]
            },
        ],

        comparison: [
            {
                icon: <Award className="w-5 h-5 text-gray-700" />,
                title: "Institutional Prestige",
                rankmantra: "Backed by industry experts in Performance Marketing",
                others: "Recognised but less credible",
            },
            {
                icon: <BookOpen className="w-5 h-5 text-gray-700" />,
                title: "Curriculum",
                rankmantra: "Covers Google Ads, Meta Ads, LinkedIn Ads, CRO & Analytics",
                others: "Mostly basics, limited practical exposure",
            },
            {
                icon: <Briefcase className="w-5 h-5 text-gray-700" />,
                title: "Projects",
                rankmantra: "6+ live ad campaigns & case studies",
                others: "Few projects, less real-world exposure",
            },
            {
                icon: <Users className="w-5 h-5 text-gray-700" />,
                title: "Career Support",
                rankmantra: "Job & freelance guidance",
                others: "Limited placement support",
            },
            {
                icon: <FileBadge className="w-5 h-5 text-gray-700" />,
                title: "Certification",
                rankmantra: "Recognized Performance Marketing certificate",
                others: "Few or generic certificates",
            },
            {
                icon: <Layers className="w-5 h-5 text-gray-700" />,
                title: "Specialisations",
                rankmantra: "Multiple paid marketing options",
                others: "Very few or none",
            },
        ],
        cost: {
            price: "333 per day",
            list: [
                "Learn core performance marketing skills in 45 days",
                "Hands-on training with live ad campaigns",
                "Practical exposure to Google Ads, Meta Ads, LinkedIn Ads & more",
                "Certificate on course completion"
            ]
        },

        faqs: [
            {
                question: "How long is this course?",
                answer:
                    "The course duration is 1 to 1.5 months with practical training sessions.",
            },
            {
                question: "Do I need any technical knowledge?",
                answer:
                    "No, this course is designed for beginners, and no prior experience is required.",
            },
            {
                question: "Will I get a certificate?",
                answer:
                    "Yes, you will receive a recognized digital marketing certification after completing the course.",
            },
            {
                question: "What is the course fee?",
                answer:
                    "The course fee is affordable, and we also provide flexible payment options. Contact us for detailed pricing.",
            },
            {
                question: "Can I get a job after this course?",
                answer:
                    "Yes, we offer job assistance and guidance to help you start your digital marketing career.",
            },
        ]
    },
]


export default data