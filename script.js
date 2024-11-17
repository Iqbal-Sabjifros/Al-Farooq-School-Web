// Function to open the Guide to EOT PDF in a new tab
function openGuidePDF() {
  window.open('https://drive.google.com/file/d/1HId_dSx7sf0fgdu5gMfRufBMgb-brDVj/view', '_blank'); // Replace with the actual PDF URL
}

// Subject data for each grade with individual links for EOT resources
const gradeSubjects = {
  "Grade 5 الصف الخامس": [
    { 
      en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ek0ubPyBTspIhjHGQMN_MVABS1JOH95v2VHvwG14_q0imA?e=w1f4bv", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EqtV4Fcy891GgzLEBANxKN8B_dJi0q8znpLBe8z_nBcd-A?e=yjE8vM" 
    },
    { 
      en: "English Language", ar: "اللغة الإنجليزية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EhZqyZbpA19FoHCroA36AJMBPtd8Guc7FgG5_WNGpgbd-Q?e=N8IWZz", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ElLRuXJo6S9NsDZP-yCZwyEBA0TTIk8fVWVX4m1CLiulrg?e=XnH99d" 
    },
    { 
      en: "Mathematics", ar: "الرياضيات", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ElDPq-ugok5OhiZSf0jtXQgBaCDKlDwCdw3w3dN30AWvWg?e=ud7wyd", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EnzLlgVcWddElSC-qlc-4DgBbQsXa5l5jYNsHl23GEeKXQ?e=TyMw7J" 
    },
    { 
      en: "Science", ar: "العلوم", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ekx91j6j5e1NuPvMvJwA9KIBKtUx6jIOFaP18fWsrxUGuQ?e=n5aHVI", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EiNFris-TJZJntTpKP2v8JoB541vpXvF2O-tDkK1l04bsw?e=lTs9Jo" 
    },
    { 
      en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EhfOc0pR5TBNqq-ga-8CND4B33IyLJfscE_OZeJRgy_4JQ?e=3Xm24B", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtpBR4CirZ5Du4qSW-ZR1xsBqStUcOD8BnOEZkXuPBNJRQ?e=TXlJ0v" 
    },
    { 
      en: "Social Studies", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EocKmdrEUBBMqPa1ArMKZnUBn0ZjOj8AKosymRTgz8t0QA?e=KfMAPh", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/En2cg2RKnqZLvWvDlhwrVFgBkM4o3xLTvV3eZ1QR8eovKA?e=xTHs5w" 
    }
  ],
  "Grade 6 الصف السادس": [
    { 
      en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvBL_OMIqx5AjiiYIjk9u4kBJIiN2imAAfmt0HvB5q4Yaw?e=ILTrTk", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EjsVyjE8yQ5CkI9eUi4tiQ8Bu9HINzWJNJVdnhyQcj2y-A?e=SQu7oP" 
    },
    { 
      en: "English Language", ar: "اللغة الإنجليزية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Egq87HrOwMRPislwgNYMtTMB_wJyXmBWxRRNpxu0FTWPow?e=xwTXnq", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Era5PTML-4RKr_jgxHgcZPMB8Kr5oac8RIDlHprt3dfwfg?e=5sMJJm" 
    },
    { 
      en: "Mathematics", ar: "الرياضيات", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Em6SZFjj_hBAqbmrQWMUtIgBZyw7n0ZhfFoyGi7ax-uumg?e=6PMocW", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvbM268ql4ZGmGpRPvwOhp0BaD6pcWc49E7sa_9yXqF_Cw?e=1ukpJP" 
    },
    { 
      en: "Science", ar: "العلوم", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EhKMkl-PAMFMg4MetYRLG18BqOrSzyyEuVHxw2VYPGh3lw?e=UT2qfP", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EsjBvGaX0YlNq6Be_iL9LBQBf_ZNR7fqNx0Acedu6d48iQ?e=WOBJTu" 
    },
    { 
      en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EsPkN5XU1yROv7lwhgujzWQBY957omDjhwkGBYGZyk4qKQ?e=3e5FmF", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ej1b0RDAchJEtTP-9kE_JU0BHHUnDaRUTWi8xnaLl0v8gQ?e=J6WSob" 
    },
    { 
      en: "Social Studies", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmXxuvlA8UxKpYGs_Zg54WYBC6zv_Ie092Arl8vcpfYIZQ?e=5FTrhJ", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EnH-feSkXF1Doy_wwJgA5eUB6OqxiNaNtVzLKSZvNGGlHQ?e=amphc4" 
    }
  ],
  "Grade 7 الصف السابع": [
    { en: "Arabic Language", ar: "اللغة العربية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EjEIA7XalvpPrj4iBijRJSIBRlQ4R_G68a3ZcazylBV1sw?e=UsYnP0", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Es-BefpkBpBDgXeadlTd7goBNr06rDNSxg1Ug30RyCUOyA?e=ueIzsc" },
    { en: "English Language", ar: "اللغة الإنجليزية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EofxPSxDdM9EkAuu2-gOIeQBIedbiw-SELfJ5ijWslCKfg?e=EjbNhd", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EoQV3masfwhGhbkxO2EKiE4BWGk4oGxyeh97V-ttvUqltg?e=pjE2jY" },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EnQNLwFRb9tBo2pJpf75PAQBQ3QWRMtFh9VNFTNrbNVShg?e=WsTH7s", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ekxj_B8PiQBGjPM056dVro0BOSjIEQpne2hL-PPNkoOKaQ?e=0E2GnZ" },
    { en: "Science", ar: "العلوم", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eg_EkSQmp_BNrewNiymjmggBvzHf4nlpkRJ_QrA5S7BUUQ?e=4ptubO", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ehgolww5Se1PuO9giZ7gHnoB3xMeAlEq7R7bLTGGV2VI-w?e=PG9iOa"  },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmbLpe4xA6FDgENB-T6QZ_oB-TC3ahQBZqMkhFdk_Ne7rA?e=uceWen", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EqNpgT-hPWNGugaoXaCGDR0BkAA7N505b3hLRkP_hNGVrw?e=w2a7Fi"  },
    { en: "Social Studies", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EnC_Kbc2dJBLtNcSKqU9yV0BVWwczEv0Hl4EpWSPm049QA?e=dDiXEy", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ev6dyDMFfhJBmIxcYxQN634BhzHNceEXKoSTfM0p-0KxCg?e=aLCrNW"  }
  ],
  "Grade 8 الصف الثامن": [
    { en: "Arabic Language", ar: "اللغة العربية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtJlJDpY6NxKlebjWGFuiNkB5ni9cIN6HYIUPGVkhgR56g?e=0bfZtP", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvUofwaxfiVMs0mVurjxV6oB5ewEMF9GQjqAKHfanTRsaw?e=xg9M1a" },
    { en: "English Language", ar: "اللغة الإنجليزية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EldhshbibBdIsPSEhWxl9r8BpmgcSnt5NKeRoacUWh7NDw?e=sF1E7C", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ek095-v3v79DsZusCYiSzE0B86FWIViEsQOdGdKTrsuSwg?e=BNutn6" },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eoh8KchcYzhNraAbl3N3sJABmfr0v7GkXiE72MsEfPMdAQ?e=X22Xwc", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eu2W0sy0SWVJv_tDpfwSnxoB0rZdNLLMNH8A0xQkhj_wtQ?e=dKjq54" },
    { en: "Science", ar: "العلوم", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ep6AwmLoGXNMgwflXqGRPKEBxJ3IOl9uO5c0OZFZYnU0oA?e=Ea0RuN", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eoyp8RDFt4NMrXcdkX1hDQ8BEmDCWlAL5QJ01FnhiPkwKA?e=rV5wKE"  },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvW0s7H7HxhKhV8tfeFbP_sBo2svPTHAqYhVitHB21z6wQ?e=Jb8P7N", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkyldwxhchNBgNDOOiqS9JIBxb98l0Yf0yXOafSojObuOA?e=1yO5HG"  },
    { en: "Social Studies", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Elt-r1HNS95DmiEU9csXC-sBN7mp_ttOqRfdXyFp0bodxQ?e=C4W9Ma", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvFZEfBd2r9DhX9DeKEZ-dYBcgmt7xC2t5HFp7q-6tzWKQ?e=FIeVaT"  }
  ],
  "Grade 9 Advanced الصف التاسع متقدم": [
    { en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EorJhrDqwt1Cm3dzVzSW6nMBWHiFbpo2_-j6TkGXsXXEtA?e=fedIgw", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtKu3qgw-YlIpkkQvORWrfABbYiE_C8a1ZWB-Yqg0Kf0LA?e=iCW4ZN"  },
    { en: "English Language", ar: "اللغة الإنجليزية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkCvJxY_npNGn0KVs1U5QJUBl2rGxkAxhvRMUO6yaLmyhg?e=OcuKni", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EhYjos22inFBtCscaV7ex1sBH5tmAUOoYMDD5lAGbFLPbQ?e=wpg5dM"  },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ev882rn6MEFAi6PElTlb97YB8rhte210V6HYPUQI81R0TQ?e=e7eLxm", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EuRzn7g_NRNHo2p80DEuWYEBPIMcPXBgK71aZli9wGa4ew?e=lyz42c" },
    { en: "Biology", ar: "الأحياء",
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkAyitBBfL5MqjgaK6TwwmUBWISTV48G6CWgmY-CNLGpSA?e=TRjIWl", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EgEInK6LhaNMvNt0DcX2h9UBQBtz8sJI_o7Ux2T5gJegmg?e=YkDRlD"  },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EsdH1zVXhxdDlCMWuU_qU08BxeRQYyCEjt3ggWNCefkcAQ?e=YXgk8l", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmaJZdlKX-BNlYOXLCNYLlMBKDU0-h0ArLIh9eCiocoxEw?e=hp2tdK"  },
    { en: "Social Studies", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EjClKoLsCl5JuxvMRgMH0hgBNIsVHyfVd47czd0tg1t-uA?e=cPttDn", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ek3ORfxbtWpPh5MfV48PBDQBcq0bs_Ay2kUFozedAj1fxw?e=8p7FTl"  },
    { en: "Physics", ar: "الفيزياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ejo5sZrG3v5NnEiXFN0d6bgBrgDYWVKos9WU4DtSQGon0Q?e=IYTi0W", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EiS4vahAjQ9JpI80EpBts3ABQKcHFKh8rnQN1lA5SylW7w?e=vIOsfH"  }
  ],
  "Grade 9 General الصف التاسع عام": [
    { en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EqssAd9pxodEuk4MduQPW7MB_Jbt-jXC1Df-Y5vO0a-F9g?e=ds3TVG", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtOmtdFXjmRPi2-h5d9KHwUB9f-dNC1yQ2JONntJhGoQsw?e=l8jly8"  },
    { en: "English Language", ar: "اللغة الإنجليزية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmQLiD7-0BFBomCjzpW2ZvUB6kjj99G7SGfEDFzjPxIfAQ?e=d0NNOy", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpFlJmur-5tKlEqsKmK-MpYBu2SF7LdWdhp60dM401XGVg?e=nQZkcH" },
    { en: "Mathematics", ar: "الرياضيات", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpbTaaajTHVDvfc85bzvGsIBAwLp6tV1cG7fqZslwX-yAQ?e=ujdV1C", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EijP6uogFmFFqQ3n8HW9qAEB-ThnyeBSUF1hCaKmOu0bIg?e=oKOayh"  },
    { en: "Science", ar: "العلوم", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtRdv04qvQpNp-44hr6_cZwB-AleGqjnJg1Cr9h9aSMglg?e=levcU6", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvJyL4KPoBRNjZ8l9eQ913gBpuUzcxNoaWOx2Nx0HZ7BhA?e=18iKDb"  },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpgX5yQ76qBEv94oiO0rKpgBa9IGYPzmpRWK0ac9JJiw3Q?e=lkMfkR", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ejlp7UxAoeRNgLDURvu6C8ABdPNdF3NLNLsIHxGV_zKbLw?e=gvKY9L"  },
    { en: "Social Studies", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EgjgD3EcgexBtkDVYZII_QgBrouuRkUCCQliXpS0MuoV0w?e=MYah05", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EqEft_9r5pBDs8N4zLAKwlQBU4JCX4AEGwXOHYg_wo46_A?e=hundrc"  }
  ],
  "Grade 10 Advanced الصف العاشر متقدم": [
    { en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpeYChm3HnFFno71obLqrRMBGtXeQZ7iq2xojab94X2cDQ?e=zHERAA", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EiC8FTV4zNFIpF2UAfgbE9gBRXGKFpkBrc3W8l_KHr_ofQ?e=oKWIb5"  },
    { en: "English Language", ar: "اللغة الإنجليزية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Erq9nc2c7RtOg-zOnyGsYLsB1z5nWcM_I4wvKWx0D7exkQ?e=SNwVrh", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmA6FJn-A4JHk-sGicbqCHYBv50jUj7Qn7UB6rDLx416yQ?e=PFPMWY" },
    { en: "Mathematics", ar: "الرياضيات", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EhtIjLCg1fdBrT34sYbA980B3qYY2o0jC9Ov4uyRs1RbHA?e=VndJsC", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EinyIR5wjqBLio8t6fggZUgBGyF4kHC4nl-jXQYDdmsc7g?e=rzOAZ4"  },
    { en: "Chemistry", ar: "الكيمياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/En9PKcQCUJ1KkZiwSe-h_AIBGjq77dNURKuUCsBdm0VWWw?e=VXvUr8", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EsHV8d2rn61Hi8hCWovEFMkBPPmJh1NtSfo-U6c3XeNqZQ?e=76l2uu"  },
    { en: "Physics", ar: "الفيزياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpyiQxywLv9AusrTWMmfqB4BHreO1n7OknRQhCS8AvQclg?e=SPKSW7", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkEz-ygiNM9JsMdMncs4GLoB9xaA33DUR0zEtrGNzmRRAw?e=1rueSX"  },
    { en: "Biology", ar: "الأحياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkCdEg22bChGgBLqd-wpT78B8dj4WSntG6XZwTo6jKzgfQ?e=oibZGV", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EqnPsHFNIk1LrPbMG3xXRk8BPLH0-UUOk8e7vifi91qYRw?e=yz8YGX"  },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EogYi1l95nFLt23VF-gJehkBIXiJEf7akHLJNUkDsKdAUg?e=TJxiKh", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EjoHUESP2VpDgzZ4jBrEKaMBwALhOplra6eIYkIgT4gPMA?e=HVDJhU"  },
    { en: "Social Studeis", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EoP_v-zne6dNhuXI26hKeEYBmGMRGFwGDoXluER0WH6z2A?e=WC68xP", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvzVyQfQhIRKm0ZMOTvZtc4B3QdXlRFNSX9hqYApwONaAw?e=lIfuld"  }
  ],
  "Grade 10 General الصف العاشر عام": [
    { en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkcfnNh_PPBDsADJjxOPeOEB94fuvWV-Y3mb2n809ECgEQ?e=J8xCje", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EiC8FTV4zNFIpF2UAfgbE9gBRXGKFpkBrc3W8l_KHr_ofQ?e=oKWIb5"  },
    { en: "English Language", ar: "اللغة الإنجليزية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EjkBjpmk_2lBuHdz5vHiFLgBSxZYSwB1GdGccgjlqQooMg?e=CV7hlA", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EnEpGm5VPAhEmiTMvw958CUBpl8CyK5MghKi5TZnSHy5NA?e=1e5Wck"  },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EslqlD07qfJAsHK75hS2MIABE3R3GilVhoNw7e-Z0tXjng?e=idipEz", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ErC2st-27MtImT6n29nCT2cBMf7vYaM6LfK_23O5-tq_BQ?e=h1P9oM" },
    { en: "Biology", ar: "الأحياء" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EgzKLi4UgPpNidvKHHlLyN0BlfPGBh8pRt8c5XP_gQd1wA?e=aP0Val", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvzydlJIbcBHrtU1vlRKU4wBHoQDpPKiqcW9XpU57PNeSg?e=krn26x" },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpHm_Z675rFOp3Sk9IF-NZIBthFUg99JUQedGgN75xupnQ?e=TsRUai", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EuQvm1YNWy5Hr3qEx3mUPIIB6sYgFaeCGtI29R0QJflBCg?e=Qv4cyA"  },
    { en: "Social Studies", ar: "الدراسات الاجتماعية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Es8H7JlpsgdDvsnbcVPpUREBw3dDYtDU_MUvaLmV8AvH4Q?e=qQY2Ql", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EshTAxvZyARNgR6t6SQAU_kBz0SpBLSdBPKVsJpWSaMz8A?e=Kc8PCO"  },
    { en: "Physics", ar: "الفيزياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EnQp0787InBBkwp6EEnJWu0BEj40K1P7G-RGBJiQURmE9A?e=X7QODT", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EoZa710W1P5Ph91MYuLVY5sBI2ta5z7-B4crkjjGgOO51Q?e=RtYgVc"  }
  ],
  "Grade 11 Advanced الصف الحادي عشر متقدم": [
    { en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EviRtNPhIcFGk88oy9ZC0q0BFzitogJZUaWQpwiY3p0ISA?e=5hh1dx", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eju4EWqXPalPmwkc6YSqEYABbD4csQQIfh2k8vw8vrQzYg?e=bMtYWe"  },
    { en: "English Language", ar: "اللغة الإنجليزية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EoA0qHapWuhIj2QPeZeI9fIBI2XvEy-3-YjijnNkDXZreA?e=0JE4Qx", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EhrFx8p8k6JNnrv0DB6UiuMB8NEQ_klhtmO1BKV8X9j2hA?e=6vW896"  },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EiFrntUlhTNLvsBnvQJvvFsBCdjBhk3VVOU6iTFbpc3vZA?e=LY4h88", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmaE6UW1bFBKpQHvy7oBAx0BhPX9R2jXiFWR9c1Wh5GcTA?e=edHAcR" },
    { en: "Physics", ar: "الفيزياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EswRgNdbkCJJvhf4SgOwR9IBy56D6u8Q7GY26Irsaqe0wQ?e=Fpy1kG", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ElyBIJ4nL8lKoeWp7nLUOPYBObYQgWaRyBgSauY8qgh_zg?e=f4i7ku"  },
    { en: "Chemistry", ar: "الكيمياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkCxolRL3VRIi26QTAHgthQBoWjFBhw6vsj0WS7V3iT85A?e=t5nVs4", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Elb4GDpnrZdMu8tVW8f_R3ABI32GHbs8pmpJ2UliWn_TcQ?e=i0hA1j"  },
    { en: "Biology", ar: "الأحياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EoQM9OjsCPNLtA1HdCObPK0B-_cvhM6MRLnTe3ddJk8W8g?e=YzojWo", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EoiysLi6iudMqOXsE1a5_pwBBzHOEWkg7efiQ5sxQn7vcg?e=8swoZl"  },
    { en: "Social Studies", ar: "الدراسات الاجتماعية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EskpVuVjkOJOlTHM6cMIXWsBA0GwUEtmRgdpzE6eG4W2tw?e=yrQPWa", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eq2PUFtVoRpCmWX6MYAIqpEBOE6sykKzeyXeYuF5MTajcA?e=MGUbE3" },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EiZ5m4-M1uVIndzU-ObhlAUBH2ZOzHFTPqLK4dj8KdQJHw?e=PaRp1C", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkvoqRQVCDJErhYigO6_sOQBnkdeqjyUe4qKS2tdd_TtGQ?e=kNMS7n"  }
  ],
  "Grade 11 General الصف الحادي عشر عام": [
    { en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtJihMySqlpApapIRDwsBG4BivFIG7sezefhSLuz3Kpc6w?e=RfjgZE", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EqkacIq26p5Gt6UQC-d0Ak0BVJ1fWeBZADDImJWWNDUarw?e=1kcng8"  },
    { en: "English Language", ar: "اللغة الإنجليزية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Empv-xpXOQFCk5uCoY-DKDMBkaqf4Hv08DOCI4OqT8jwaA?e=LN3vbn", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Erhblo5aXyRIvW_wWDq8gjgBx4XByce56OFYAzXo7RQuwQ?e=PuF5nz" },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Elrc6veKOcFHiJiQ3JDYSNEBTccEke_kh4oLW2scVc-3rA?e=hKspSN", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EgIG9rw8Tz5Lm-kKbFdF7r4BvCl2iGfR32DjmdSDYHnCsA?e=8VFQPn" },
    { en: "Biology", ar: "الأحياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EuKaq46zJdxCtOiVTMe2v0IBf6rqezlpRXwURTcenGAnTQ?e=fOyPgf", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Elleq6bhjrJFn0m7geVq7rQBMURLQCt15AhIdweevM8CSg?e=q5nVnT"  },
    { en: "Physics", ar: "الفيزياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EopQjrmXv_dPqSCmCsxHw8cB__H-SEImvZIh5u8bpooNzg?e=RIBQAo", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eid5-Q1fUDhFnsXyS8kALGgBviIulHnoKwdKzPWYf3f8UA?e=I11lFi"  },
    { en: "Chemistry", ar: "الكيمياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/El239xEsOc9Apo3HSShphZQBYNEZlOjffF1M1U5HW8ythg?e=dWKAcG", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eny17uH5YjlOr6FfNrbOuNgB0pXfjXoDD9NRp7Su7xXgXg?e=5Gtx8p"  },
    { en: "Social Studies", ar: "الدراسات الاجتماعية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmzvdGIIR_lIpbrK9FSrx-UBUKCULZQRfV712gfJB0E1pw?e=uVcfMn", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EroFbpcxz1NDt8rPCxLg8IIBORp3W5c1N5RMYdwgY28JyA?e=ht8suX" },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ek0kOD1oXwFJkbsRS-2s3uEBnNVhoTu8uJqS7mfwsBhKuw?e=q6NM7f", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Em6zFrIqFvRDrnf6_4AKYYwBdNTYhV8MA_qIZhaLZfip_A?e=X7i6cU"  }
  ],
  "Grade 12 Advanced الصف الثاني عشر متقدم": [
    { en: "Arabic Language", ar: "اللغة العربية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ej7lQaDzEp9MjvxmB2xuBNwBWU-tZXCjmDkxpeyU9316yw?e=wZD588", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpEi3cVxIvBMna9ht0oP4PgBFmAo6VRwHo9LvopPI3pI3Q?e=Kg7JT8" },
    { en: "English Language", ar: "اللغة الإنجليزية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ei0ZplVEXwFOi-a3OgpPa6IBQ5l-szzJYYAwRdMKmTa8eA?e=dgytjj", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtZgTi4dGJpJt4u49bCfk0sBs_3t3VRtfnUWG2OskiYslw?e=WkbiSe"  },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EvNivZxLwi5Ms7ep02akXFIBBULnoOWAvLWZQVLXHBGaQQ?e=OieaVX", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpXQ1FFXOc5MhH2ViVGuxyMBb0BXSDQs7zMxWG4kFVNBPA?e=JERHN9" },
    { en: "Physics", ar: "الفيزياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EgloRT-J3aVPsDaW3bv6j54BufUWbn_SZTVjEj5qhaAd1g?e=j7tSRt", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EtSnnnYvlaZKp0g2G1zYnu8BYb1SnuVfmtOfgnRrKf9mvA?e=Zngyif"  },
    { en: "Chemistry", ar: "الكيمياء" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ekc1-ipBQcpGqrpnXHhJPqcBUKvPMbF-AHXAPZIT_ZJlNA?e=lf91aQ", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Er1AxTTQONNEuEzdBioDRV8BYmFAGbkConx9PImmHcBHhA?e=4wo0Bz" },
    { en: "Biology", ar: "الأحياء" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ekz10c51EWhBuKYBmWyL8l0BAavtssgY6W8R4nQC9ZDPjQ?e=4r2p4i", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpQbsD6eHytKrsz7ysbVE4ABgeoys4a3kUqEfm7CO-WDqQ?e=6WbhCc" },
    { en: "Social Studies", ar: "الدراسات الاجتماعية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Esiu_bE2yopNvM6uOSo3qwEBqzFY7IlSCPefHwayYeTm3w?e=96YsrC", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ejlr1dh6FiNOubfqW7w7oBwBwVCMBGS762XVWJA4K9WCTQ?e=YxMDOD" },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EoB8TJxaDy9Kmaub0K0fvnkB2cWf3hhkCETZ2J43b-OKFw?e=WVYxR2", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ErBCcT6_UnxCl6uZUsqaoMUB66y7HwL_xWv6yIGGQ3zmqQ?e=5X9tZL"  }
  ],
  "Grade 12 General الصف الثاني عشر عام": [
    { en: "Arabic Language", ar: "اللغة العربية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EkNxqHqozyFMn-g479ZcUAABZtmwDU6YzjeO-o6jyA2s2Q?e=A5MFGE", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EmHsxTb84WxKoU5gLoE1rvcBmJE772fOrX3tUFNmWoFTCg?e=kSGW6I"  },
    { en: "English Language", ar: "اللغة الإنجليزية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EsL4mLteErdJjFdNoL6AwJUBmFqjKuajBHKsYfpLkWQwlw?e=fSkpcw", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EheJZl-r3zlGhtNVkf_D8E0BFS8Dt0oDVTkfs8yeJQs4mg?e=T1Mb57" },
    { en: "Mathematics", ar: "الرياضيات" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Et8tFAayuTVCh76TX2AkSsMBw0_8_5QCTkyEKYgc1_DYbQ?e=w0p4JI", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ErbEU2CIswJJqF5fAHI_EpABCx5rwCrRJLYc_w2KrA20SA?e=78QmIn" },
    { en: "Biology", ar: "الأحياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EpN-NOW3CFNPrYq7pVStfnEBdJk1XgVuoPg_EeDZJ_BT6Q?e=eXi7iB", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EudJYlQlcW9Dmcy9PRjNydgBhy4OTJpsrDxanbyCrHoQHQ?e=rfraxN"  },
    { en: "Islamic Education", ar: "التربية الإسلامية", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ErjMNw7lVIVKsZki2ePSSh0BtAWNl9ZiBSQ0zltLsRGCKQ?e=ePlphg", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/ErwrBGIn6JlFhBAE7WYpVYABoO-xwKNSROdG79R7MaMHig?e=XPhAla"  },
    { en: "Physics", ar: "الفيزياء", 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Ev1LWowi_XBCmAC8jGBJAdABJN_Gu9HmRt9emXJW7eKfWw?e=BG7VZe", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EjpdludkXgZOqKxfpf7Xr-4BCoz0YlRRajTFsOiIe5tPDg?e=EaHpU5"  },
    { en: "Chemistry", ar: "الكيمياء" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/Eqs7ccD6Q6hJqS5WJoW5WTwBU1a1LvWfJMshQzAYJ48y3w?e=0VsanJ", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EhulmFnlDBlDoHs-BG-2disBrXWNfsk2OdsimDZ7Zm50FA?e=F3dKgd" },
    { en: "Social Studies", ar: "الدراسات الاجتماعية" , 
      questionsLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/El1-ovDyZARLkrz9qmeJ7WEBUidC0g2b1UbzqoQY0zM6DA?e=uzpo2E", 
      reviewLink: "https://emiratesschoolsese-my.sharepoint.com/:f:/g/personal/mohamed_daoud_ese_gov_ae/EnOKoxtnpnhPppqHHe906ZsBinh-r93w-4h6ZCon7DrE-Q?e=iN9hv2" }
  ]
};

// Function to load grades on the main page
function loadGrades() {
  const gradesContainer = document.getElementById('grades-container');
  gradesContainer.innerHTML = ''; // Clear container

  Object.keys(gradeSubjects).forEach((grade) => {
    const button = document.createElement('button');
    button.textContent = grade;
    button.onclick = () => loadSubjects(grade);
    gradesContainer.appendChild(button);
  });
}

// Function to load subjects for a selected grade
function loadSubjects(grade) {
  const gradesContainer = document.getElementById('grades-container');
  gradesContainer.innerHTML = `
    <h2>${grade} - Subjects</h2>
    <div class="subjects-container"></div>
    <div class="center">
      <button onclick="loadGrades()" class="back-btn">Back to Home</button>
    </div>
  `;

  const subjectsContainer = document.querySelector('.subjects-container');

  gradeSubjects[grade].forEach((subject) => {
    const button = document.createElement('button');
    button.textContent = `${subject.en} (${subject.ar})`; // Combine English and Arabic
    button.onclick = () => loadEOT(subject, grade);
    subjectsContainer.appendChild(button);
  });
}

// Function to load EOT options for a selected subject
function loadEOT(subject, grade) {
  const gradesContainer = document.getElementById('grades-container');
  gradesContainer.innerHTML = `
    <h2>${grade} - ${subject.en} (${subject.ar})</h2>
    <div class="subjects-container">
      <button onclick="openPDF('${subject.questionsLink}')" class="eot-btn">EOT Questions هيكل الامتحانا ت</button>
      <button onclick="openPDF('${subject.reviewLink}')" class="eot-btn">EOT Based Reviews الإجابات النموذجية</button>
    </div>
    <div class="center">
      <button onclick="loadSubjects('${grade}')" class="back-btn">Back to Subjects</button>
    </div>
  `;
}

// Function to open a PDF in a new tab
function openPDF(url) {
  window.open(url, '_blank');
}

// Initialize grades on page load
document.addEventListener('DOMContentLoaded', loadGrades);