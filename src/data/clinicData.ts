export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience?: string;
  description: string;
  tag: string;
}

export interface DetailedTreatment {
  id: string;
  title: string;
  category: 'preventive' | 'restorative' | 'surgical' | 'cosmetic' | 'orthodontics' | 'laser';
  categoryLabel: string;
  description: string;
  highlights: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const DR_ANUPRIYA_BIO = {
  name: 'Dr. Anupriya',
  title: 'Founder & Chief Dental Surgeon',
  tagline: 'Your Trusted Partner in Dental Care',
  experience: '20+ Years Clinical Expertise',
  graduationYear: '2000',
  foundedYear: '2004',
  overview: [
    'Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry in Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.',
    'In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.',
    'At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.',
  ],
  quote:
    "Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions, our team is committed to delivering excellence at every step. Because here, your smile isn't just treated — it's celebrated.",
};

export const CLINIC_VISION_MISSION = {
  mission: {
    title: 'Our Mission',
    text: 'At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being. Continuous learning and innovation drive us to provide comprehensive solutions, from preventive care to complex dental procedures, all designed to promote long-lasting oral health.',
  },
  vision: {
    title: 'Our Vision',
    text: 'Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs. With a focus on holistic care and a passion for brightening lives, we are dedicated to ensuring that every smile we treat reflects confidence, health, and happiness.',
  },
};

export const DOCTORS_LIST: DoctorProfile[] = [
  {
    id: 'dr-anupriya',
    name: 'Dr. Anupriya',
    role: 'Founder & Chief Dental Surgeon',
    specialty: 'Comprehensive & Pediatric Dentistry',
    experience: '20+ Years',
    description: 'Clinic founder with over two decades of patient care, specialized in compassionate family and pediatric dentistry.',
    tag: 'Founder',
  },
  {
    id: 'dr-ananya',
    name: 'Dr. Ananya Iyer',
    role: 'Prosthodontist',
    specialty: 'Dentures, Bridges & Aesthetic Prosthetics',
    experience: 'Specialist',
    description: 'Expert in custom complete dentures, fixed partial dentures, and full mouth rehabilitations.',
    tag: 'Prosthetics',
  },
  {
    id: 'dr-meera',
    name: 'Dr. Meera Subramanian',
    role: 'Endodontist',
    specialty: 'Root Canal Therapy & Pulp Preservation',
    experience: 'Specialist',
    description: 'Dedicated to pain-free root canal treatments and saving natural tooth structure with microsurgical techniques.',
    tag: 'Endodontics',
  },
  {
    id: 'dr-arvind',
    name: 'Dr. Arvind Kumar',
    role: 'Dental Surgeon',
    specialty: 'Restorative & General Dentistry',
    experience: 'Specialist',
    description: 'Focuses on aesthetic tooth fillings, preventive scalings, and gentle emergency dental extractions.',
    tag: 'General Dentistry',
  },
  {
    id: 'dr-sneha',
    name: 'Dr. Sneha N',
    role: 'Orthodontist',
    specialty: 'Braces & Malocclusion Correction',
    experience: 'Specialist',
    description: 'Expert in ceramic brackets, self-ligating braces, and adolescent/adult smile alignments.',
    tag: 'Orthodontics',
  },
  {
    id: 'dr-srinivas',
    name: 'Dr. Srinivas Rohit Ramanujam',
    role: 'Implantologist',
    specialty: 'Dental Implants & Bone Grafting',
    experience: 'Specialist',
    description: 'Specializes in biocompatible titanium dental implants, permanent tooth replacements, and osseointegration.',
    tag: 'Implants',
  },
  {
    id: 'dr-balu',
    name: 'Dr. Balu',
    role: 'Laser Surgeon',
    specialty: 'Minimally Invasive Laser Dentistry',
    experience: 'Specialist',
    description: 'Performs bloodless soft-tissue surgeries, laser gingival sculpting, and accelerated laser gum therapies.',
    tag: 'Laser Tech',
  },
  {
    id: 'dr-vikram',
    name: 'Dr. Vikram Raj Kishore',
    role: 'Aligners Partner',
    specialty: 'Clear Aligners & Digital Orthodontics',
    experience: 'Specialist',
    description: 'Oversees 3D digital treatment planning and customized transparent aligner treatments.',
    tag: 'Clear Aligners',
  },
  {
    id: 'dr-ajay',
    name: 'Dr. Ajay Jumar',
    role: 'Oral & Maxillofacial Surgeon',
    specialty: 'Surgical Extractions & Wisdom Tooth Surgery',
    experience: 'Specialist',
    description: 'Specialized in complex impacted wisdom teeth removals, facial trauma, and surgical reconstructive procedures.',
    tag: 'Oral Surgery',
  },
];

export const ALL_15_TREATMENTS: DetailedTreatment[] = [
  {
    id: 'teeth-cleaning-scaling',
    title: 'Teeth Cleaning & Scaling',
    category: 'preventive',
    categoryLabel: 'Preventive Care',
    description:
      "At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you're dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health. Scaling is advised for moderate cases to remove plaque and tartar buildup, while more severe periodontal issues may require deep cleaning procedures like root planing, supported by LASER treatment. This approach not only treats existing problems but also serves as a crucial preparatory step before any surgical intervention.",
    highlights: ['Ultrasonic plaque & tartar removal', 'Non-surgical LASER gum therapy', 'Freshens breath & halts gum disease'],
  },
  {
    id: 'tooth-filling',
    title: 'Tooth Filling',
    category: 'restorative',
    categoryLabel: 'Restorative Care',
    description:
      'At Sakthi Dental Clinic, we specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth. We focus on sealing gaps effectively to prevent future decay and ensure long-term oral health. Our goal is to preserve your natural tooth structure while enhancing both function and appearance, giving you a healthier, more confident smile.',
    highlights: ['High-strength composite resins', 'Seamless color-matching to tooth enamel', 'Cavity sealing to halt decay'],
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    category: 'surgical',
    categoryLabel: 'Oral Surgery',
    description:
      'When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, but when necessary, we perform extractions using gentle techniques to minimize discomfort. We prioritize creating a stress-free environment, explaining each step to our patients. Your health and comfort are always our focus, and we aim to make tooth extraction as smooth and painless as possible, supporting you through every stage of recovery.',
    highlights: ['Gentle local anesthesia protocols', 'Comfort-first surgical management', 'Post-procedure healing support'],
  },
  {
    id: 'artificial-complete-denture',
    title: 'Artificial Complete Denture',
    category: 'restorative',
    categoryLabel: 'Prosthetics',
    description:
      "At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit. Whether you're replacing several teeth or a full arch, our customized solutions help you regain confidence and improve daily functionality. We focus on delivering practical, long-lasting dentures that enhance your smile and overall oral health.",
    highlights: ['Custom-molded ergonomic fit', 'High durability biocompatible acrylics', 'Restores natural chewing & speech'],
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'restorative',
    categoryLabel: 'Advanced Implants',
    description:
      'Dental implants at Sakthi Dental Clinic offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth. Our advanced implant procedures restore both the appearance and strength of your smile, ensuring a natural feel and long-lasting results. Trust our experienced team to help you regain optimal oral function and confidence with cutting-edge implant technology.',
    highlights: ['Biocompatible titanium fixtures', 'Permanent replacement for missing teeth', 'Preserves natural jawbone density'],
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    category: 'laser',
    categoryLabel: 'Laser Care',
    description:
      "At Sakthi Dental Clinic, we utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy. Whether you're undergoing gum reshaping or other corrective treatments, our state-of-the-art laser equipment ensures efficient, safe, and comfortable care tailored to your needs.",
    highlights: ['Virtually bloodless soft tissue surgery', 'Minimal post-operative swelling', 'Accelerated healing & recovery'],
  },
  {
    id: 'root-canal-therapy',
    title: 'Root Canal Therapy',
    category: 'restorative',
    categoryLabel: 'Endodontics',
    description:
      'When tooth infections reach deep into the pulp, root canal treatment becomes essential. At Sakthi Dental Clinic, we carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues. Our focus is on relieving pain, eliminating infection, and preserving your natural tooth structure for long-term dental health.',
    highlights: ['Immediate relief from severe toothache', 'Thorough sterile canal sealing', 'Saves the natural tooth from extraction'],
  },
  {
    id: 'wisdom-tooth-extraction',
    title: 'Wisdom Tooth Extraction',
    category: 'surgical',
    categoryLabel: 'Oral Surgery',
    description:
      'If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. At Sakthi Dental Clinic, we specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience. We also provide comprehensive post-operative care to support quick recovery and lasting comfort.',
    highlights: ['Management of deeply impacted molars', 'Precision surgical techniques', 'Comprehensive post-op recovery care'],
  },
  {
    id: 'fixed-partial-denture',
    title: 'Fixed Partial Denture (Bridge)',
    category: 'restorative',
    categoryLabel: 'Prosthetics',
    description:
      'Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. At Sakthi Dental Clinic, we focus on custom-made dental bridges that restore your smile’s appearance while improving chewing function and maintaining oral stability.',
    highlights: ['Anchored securely to adjacent teeth', 'High-strength porcelain or ceramic', 'Prevents shifting of remaining teeth'],
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening (Bleaching)',
    category: 'cosmetic',
    categoryLabel: 'Cosmetics',
    description:
      "Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades. Whether addressing discoloration from food, beverages, or age, our whitening treatments restore your smile's natural radiance and boost your confidence.",
    highlights: ['Safe for tooth enamel & gums', 'Removes deep extrinsic & intrinsic stains', 'Noticeably whiter smile in one visit'],
  },
  {
    id: 'veneers',
    title: 'Veneers',
    category: 'cosmetic',
    categoryLabel: 'Cosmetics',
    description:
      'Transform your smile with dental veneers, thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. At Sakthi Dental Clinic, we offer high-quality veneers that enhance your teeth’s appearance, giving you a flawless and natural-looking smile.',
    highlights: ['Ultra-thin, custom porcelain shells', 'Corrects chipped, stained, or spaced teeth', 'Stain-resistant and durable surface'],
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    category: 'preventive',
    categoryLabel: 'Children Dental Care',
    description:
      'At Sakthi Dental Clinic, we provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits. From routine check-ups to preventive treatments, we focus on building healthy dental habits for a lifetime of bright smiles.',
    highlights: ['Child-friendly, comforting setting', 'Fluoride treatments & pit/fissure sealants', 'Gentle milk teeth pulp preservation'],
  },
  {
    id: 'flap-surgery',
    title: 'Flap Surgery',
    category: 'surgical',
    categoryLabel: 'Periodontics',
    description:
      'For advanced gum disease, flap surgery may be necessary. Our skilled team at Sakthi Dental Clinic performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing. This treatment helps prevent further periodontal issues and supports gum health.',
    highlights: ['Direct access to deep periodontal pockets', 'Reduces bone loss risks', 'Promotes gum reattachment & tissue health'],
  },
  {
    id: 'orthodontic-braces',
    title: 'Orthodontic Braces',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    description:
      'Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces, metal, ceramic, or lingual, to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile.',
    highlights: ['Metal, ceramic & self-ligating brackets', 'Comprehensive bite & alignment correction', 'Suitable for both teens and adults'],
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    description:
      'For a discreet alternative to traditional braces, Sakthi Dental Clinic offers clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey.',
    highlights: ['Near-invisible transparent trays', 'Removable for eating and brushing', 'Custom digital 3D treatment planning'],
  },
];

export const ALL_14_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Can medication completely relieve tooth pain?',
    answer:
      'Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.',
    category: 'General & Pain Relief',
  },
  {
    id: 'faq-2',
    question: 'Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?',
    answer:
      'No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn’t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth.',
    category: 'Cleaning & Gum Care',
  },
  {
    id: 'faq-3',
    question: 'Can fluorosis stains be removed through scaling?',
    answer:
      'Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement.',
    category: 'Cleaning & Whitening',
  },
  {
    id: 'faq-4',
    question: 'Can painful teeth be treated with fillings?',
    answer:
      'Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won’t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin).',
    category: 'Fillings & Decay',
  },
  {
    id: 'faq-5',
    question: 'Is placing a cap or crown necessary after root canal treatment (RCT)?',
    answer:
      'Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing.',
    category: 'Root Canal (RCT)',
  },
  {
    id: 'faq-6',
    question: 'Can milk teeth need root canal treatment (RCT)?',
    answer:
      'Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss.',
    category: 'Pediatric Dentistry',
  },
  {
    id: 'faq-7',
    question: 'How can I maintain good oral hygiene?',
    answer:
      'Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums.',
    category: 'Oral Hygiene',
  },
  {
    id: 'faq-8',
    question: 'What is the best age to get braces?',
    answer:
      'Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition.',
    category: 'Orthodontics & Braces',
  },
  {
    id: 'faq-9',
    question: 'Do all wisdom teeth need to be removed?',
    answer:
      'No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth.',
    category: 'Extractions & Surgery',
  },
  {
    id: 'faq-10',
    question: 'Is it important to replace missing teeth after extraction?',
    answer:
      'Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function.',
    category: 'Dentures & Implants',
  },
  {
    id: 'faq-11',
    question: 'What are the benefits of dental implants?',
    answer:
      'Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life.',
    category: 'Dentures & Implants',
  },
  {
    id: 'faq-12',
    question: 'Which type of toothbrush and toothpaste should I use?',
    answer:
      'Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene.',
    category: 'Oral Hygiene',
  },
  {
    id: 'faq-13',
    question: 'What causes tooth sensitivity?',
    answer:
      'Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth.',
    category: 'General Oral Care',
  },
  {
    id: 'faq-14',
    question: 'How often should I see a dentist?',
    answer:
      'Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health.',
    category: 'General Oral Care',
  },
];
