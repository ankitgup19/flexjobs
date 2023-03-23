import { faSquareFacebook, faLinkedinIn, faLinkedin, faTwitter, faSquareTwitter, faYoutube, faSquareYoutube, faPinterestP, faPinterestSquare, faInstagram, faInstagramSquare, faTiktok, faSquareReddit } from '@fortawesome/free-brands-svg-icons';

export const AUTH_USER = 0;
export const AUTH_USER_NAME = "ankit gupta";
export const socialIconsSidebar = [
    { href: "https://www.facebook.com/", title: "Facebook", className: faSquareFacebook },
    { href: "https://www.linkedin.com/groups/1498597/", title: "LinkedIn", className: faLinkedinIn },
    { href: "https://twitter.com/flexjobs", title: "Twitter", className: faTwitter },
    { href: "https://www.youtube.com/flexjobs", title: "YouTube", className: faYoutube },
    { href: "https://www.pinterest.com/flexjobs/", title: "Pinterest", className: faPinterestP },
    { href: "https://www.instagram.com/flexjobs/", title: "Instagram", className: faInstagram }
];

export const socialIconsFooter = [
    { href: "https://www.facebook.com/flexjobs", title: "Facebook", className: faSquareFacebook },
    { href: "https://www.linkedin.com/company/flexjobs-com", title: "LinkedIn", className: faLinkedin },
    { href: "https://twitter.com/flexjobs", title: "Twitter", className: faSquareTwitter },
    { href: "https://www.youtube.com/flexjobs", title: "YouTube", className: faSquareYoutube },
    { href: "https://www.pinterest.com/flexjobs/", title: "Pinterest", className: faPinterestSquare },
    { href: "https://www.instagram.com/flexjobs/", title: "Instagram", className: faInstagram },
    { href: "https://www.tiktok.com/@flexjobs?lang=en", title: "TikTok", className: faTiktok },
    { href: "https://www.reddit.com/user/flexjobs", title: "Reddit", className: faSquareReddit }
]

export const COUNTRY_LIST = ["Select Country", "Anywhere (can be done from anywhere worldwide)", "Afghanistan", "Albania", "Algeria"];

export const FILTER_OPTIONS = [
    {
        name: "Remote",
        children: [{
            name: "100% Remote Work (879)"
        },
        {
            name: "Hybrid Remote Work (76)"
        }]
    },
    {
        name: "Job Type",
        children: [{
            name: "Employee (758)"
        },
        {
            name: "Freelance (210)"
        }]
    },
    {
        name: "Schedule",
        children: [{
            name: "Full-Time (5)"
        },
        {
            name: "Part-Time (4)"
        }]
    },
    {
        name: "Category",
        children: [{
            name: "Accounting & Finance (3)",
            children: [{
                name: "Bookkeeping (2)"
            }],
        },
        {
            name: "Editing (3)"
        },
        {
            name: "Bilingual (2)",
            children: [{
                name: "Spanish (2)"
            }]
        },
        {
            name: "Education & Training (2)",
            children: [{
                name: "College & University (1)"
            },
            {
                name: "Online Teaching (2)"
            },
            {
                name: "Teaching (1)"
            }]
        }]
    },
    { name: "Career Level" },
    { name: "Accolades" },
    { name: "Title" },
    { name: "Travel" }
]

export const SearchResults = [{
    title: "Senior HR Project, Program Manager",
    age: ["Yesterday"],
    tags: ["100% Remote Job", "Full-Time"],
    locations: ["NY", "IL", "MI"],
    description: "Define project scope, goals and deliverables that support business strategy in collaboration with senior management and stakeholders. Develop full-scale project plans and associated communication documents. Set and continually manage project...",
    accolades: [{
        title: "This employer is ranked by Fortune as a company dedicated to addressing society's biggest challenges.",
        imgUrl: "https://www.flexjobs.com/images/icons/fortunectw2x.png"
    },
    {
        title: "Employer is a Forbes Global 2000 company, a ranking of the biggest, most powerful public companies in the world",
        imgUrl: "https://www.flexjobs.com/images/icon-accolade-forbesglobal.png"
    }]
}, {
    featured: true,
    newjob: true,
    title: "Accounting Manager",
    age: ["Yesterday"],
    tags: ["100% Remote Job", "Full-Time"],
    locations: ["Burlingame", "CA"],
    description: "The Accounting Manager will oversee 1 Sr AP for now and eventually manage a team of up to 3 and review the work with a keen eye. Ensure accurate deliverables for monthly close - prep and/or review journal entries and account reconciliations. Help...",
    accolades: [{
        title: "100 Top Companies To Watch for Remote Jobs",
        imgUrl: "https://www.flexjobs.com/images/icons/flexjobs-top100-accolade.svg"
    },
    {
        title: "This employer is one of the well-respected Barron's 400 stock index",
        imgUrl: "https://www.flexjobs.com/images/barrons400.png"
    }]
}]