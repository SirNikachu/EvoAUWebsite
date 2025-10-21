const teamData = [
  // Faculty
  {
    name: "Mehmet Arik",
    role: "Faculty",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/images/directory/arik-mehmet.jpg",
    email: "mza0223@auburn.edu",
    phone: " 334.844.3321",
    website: "https://eng.auburn.edu/directory/mza0223",
    roleCategory: "Faculty",
    subRole: ""
  },
  {
    name: "Jay Khodadadi",
    role: "Faculty",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/images/programs/mech/headshots/khodadadi-jeyhoon.jpg",
    email: "khodajm@auburn.edu",
    phone: "334.844.3333",
    website: "https://eng.auburn.edu/directory/khodajm",
    roleCategory: "Faculty",
    subRole: ""
  },
  {
    name: "Pan He",
    role: "Faculty",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/images/programs/csse/headshots/he-pan.jpg",
    email: "pzh0057@auburn.edu",
    phone: "334.844.6389",
    website: "https://eng.auburn.edu/directory/pzh0057",
    roleCategory: "Faculty",
    subRole: ""
  },
  {
    name: "Song-Yul Choe",
    role: "Faculty",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/images/programs/mech/headshots/Song-Yul-Choe-Headshot_web.jpg",
    email: "choeson@auburn.edu",
    phone: "334.844.3328",
    website: "https://eng.auburn.edu/directory/choeson",
    roleCategory: "Faculty",
    subRole: ""
  },
  
  // Grad Students
  {
    name: "Faisal Ahmed",
    role: "Graduate Researcher",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/artgroup/website-photos/faisal-headshot.jpeg",
    email: "fza0062@auburn.edu",
    phone: "",
    website: "",
    roleCategory: "Grad Students",
    subRole: ""
  },
  {
    name: "Tommy Kratt",
    role: "Graduate Researcher",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/images/image-not-available.jpg",
    email: "trk0028@auburn.edu",
    phone: "",
    website: "",
    roleCategory: "Grad Students",
    subRole: ""
  },
  {
    name: "Bikram Bhattarai",
    role: "Graduate Researcher",
    university: "Auburn University, Engineering",
    photo: "http://bikramsinghbhattarai.com.np/wp-content/uploads/2021/04/FaceApp_1614909290109-01-474x620.jpeg",
    email: "bikram.bhattarai@auburn.edu",
    phone: "",
    website: "",
    roleCategory: "Grad Students",
    subRole: ""
  },
  {
    name: "Darryl Cherian Jacob",
    role: "Graduate Researcher",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/images/image-not-available.jpg",
    email: "dzj0055@auburn.edu",
    phone: "",
    website: "",
    roleCategory: "Grad Students",
    subRole: ""
  },

  // Undergrad Students
  {
    name: "Ben Tzou",
    role: "Computational Modeling",
    university: "Auburn University, Engineering",
    photo: "Headshots/tzou.jpg",
    email: "bzt0035@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/benjamin-tzou/",
    roleCategory: "Undergrad Students",
    subRole: "Computational Modeling"
  },
  {
    name: "Daniel Vallejo",
    role: "Computational Modeling",
    university: "Auburn University, Engineering",
    photo: "Headshots/vallejo.jpg",
    email: "dzv0027@auburn.edu",
    phone: "",
    website: "",
    roleCategory: "Undergrad Students",
    subRole: "Computational Modeling"
  },
  {
    name: "George Crockatt",
    role: "Computational Modeling",
    university: "Auburn University, Engineering",
    photo: "Headshots/crockatt.jpeg",
    email: "gic0006@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/george-crockatt/",
    roleCategory: "Undergrad Students",
    subRole: "Computational Modeling"
  },
  {
    name: "Alexandra Warhurst",
    role: "Hardware",
    university: "Auburn University, Engineering",
    photo: "Headshots/warhurst.jpeg",
    email: "anw0081@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/alexandra-warhurst-094980232/",
    roleCategory: "Undergrad Students",
    subRole: "Hardware"
  },
  {
    name: "Yu Chien Tang",
    role: "Hardware",
    university: "Auburn University, Engineering",
    photo: "https://eng.auburn.edu/images/image-not-available.jpg",
    email: "yzt0061@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/yu-chien-tang-90652b299/",
    roleCategory: "Undergrad Students",
    subRole: "Hardware"
  },
  {
    name: "Alyssa Ezell",
    role: "Hardware",
    university: "Auburn University, Engineering",
    photo: "Headshots/ezell.jpg",
    email: "ale0060@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/alyssa-ezell-12b68b27a/",
    roleCategory: "Undergrad Students",
    subRole: "Hardware"
  },
  {
    name: "Nikith Kandula",
    role: "Artificial Intelligence",
    university: "Auburn University, Engineering",
    photo: "Headshots/kandula.jpeg",
    email: "nzk0064@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/nik-kandula/",
    roleCategory: "Undergrad Students",
    subRole: "Artificial Intelligence"
  },
  {
    name: "Sai Korrapati",
    role: "Artificial Intelligence",
    university: "Auburn University, Engineering",
    photo: "Headshots/korrapati.png",
    email: "skk0026@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/sai-korrapati/",
    roleCategory: "Undergrad Students",
    subRole: "Artificial Intelligence"
  },
  {
    name: "Yusuf Arik",
    role: "Artificial Intelligence",
    university: "Auburn University, Engineering",
    photo: "Headshots/arik.jpeg",
    email: "yea0001@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/yusuf-arik-04a946214/",
    roleCategory: "Undergrad Students",
    subRole: "Artificial Intelligence"
  },
  {
    name: "Josh Rice",
    role: "Artificial Intelligence",
    university: "Auburn University, Engineering",
    photo: "Headshots/rice.jpg",
    email: "jar0175@auburn.edu",
    phone: "",
    website: "https://www.linkedin.com/in/joshua-rice-102502370/",
    roleCategory: "Undergrad Students",
    subRole: "Artificial Intelligence"
  }
];
