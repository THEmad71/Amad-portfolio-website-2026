// src/posts.ts
import ictAmbassadorPoster from "../assets/Thoughts/Ict olympiad/ambassador-poster.jpg";
import ictSpeechImage from "../assets/Thoughts/Ict olympiad/ictSpeechImage.jpeg";

import ieeevicechair from "../assets/Thoughts/Ieee Cs iiuc 2026/ieee-vice-chair.jpeg";
import groupPhoto from "../assets/Thoughts/Ieee Cs iiuc 2026/groupPhoto.jpeg";

import iccit1 from "../assets/Thoughts/iccit/iccit1.jpeg";
import iccit2 from "../assets/Thoughts/iccit/iccit2.jpg";
import iccit3 from "../assets/Thoughts/iccit/iccit3.jpg";
import iccit4 from "../assets/Thoughts/iccit/iccitbanner.jpeg";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
  tags?: string[];
  gallery?: string[]; // ✅ added
}

export const posts: Post[] = [
  // =========================
  // ICT Olympiad Ambassador
  // =========================
  {
    slug: "ict-olympiad-campus-ambassador-leader",
    title: "ICT Olympiad Bangladesh — Campus Ambassador Leader (Season 3)",
    excerpt:
      "A leadership journey of promoting technology, inspiring students, and representing my university on a national ICT platform.",
    date: "October 2024",
    readTime: "4 min read",
    tags: ["Leadership", "ICT Olympiad", "Campus Ambassador", "Public Speaking"],
    image: ictAmbassadorPoster,
    gallery: [ictAmbassadorPoster, ictSpeechImage],
    content: `

      <div class="space-y-8">
        <p>
          Being selected as a <strong>Campus Ambassador Leader</strong> for ICT Olympiad Bangladesh (Season 3)
          was both an honor and a responsibility. Representing <strong>International Islamic University Chittagong</strong>,
          I worked to promote technology-driven learning and encourage students to participate in one of the country’s
          largest ICT competitions.
        </p>

        <p>
          My role involved organizing awareness campaigns, guiding participants, and coordinating with the national organizing team.
          Through this experience, I strengthened my communication, leadership, and community-building skills.
        </p>

        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="${ictSpeechImage}"
            alt="Delivering speech during ICT Olympiad campaign"
            class="max-w-sm object-cover rounded-xl"
          />
        </div>

        <p>
          One of the most impactful moments of this journey was delivering a speech during our campus campaign session.
          Standing in front of students and motivating them to participate in a national-level technology competition
          was truly inspiring.
        </p>

        <p>
          ICT Olympiad was not just an event — it was a movement to inspire future technologists and innovators.
        </p>

      </div>
    `,
  },

  // =========================
  // IEEE CS IIUC Vice Chair (Technical)
  // =========================
  {
    slug: "ieee-cs-iiuc-vice-chair-technical-2025-2026",
    title: "IEEE CS IIUC Vice Chairperson (Technical) (2025–2026)",
    excerpt:
      "Served as Vice Chairperson (Technical) of IEEE Computer Society IIUC Student Branch Chapter, leading workshops, competitions, and research-driven initiatives.",
    date: "February 28, 2026",
    readTime: "3 min read",
    tags: ["IEEE", "Leadership", "Technical", "Computer Society", "IIUC"],
    image: ieeevicechair,
    gallery: [ieeevicechair, groupPhoto],
    content: `
      <div class="space-y-8">



        <p>
          I served as the <strong>Vice Chairperson (Technical)</strong> of the IEEE Computer Society IIUC Student Branch Chapter
          for the <strong>2025–2026</strong> tenure.
        </p>

        <p>
          In this role, I led the technical division of the chapter—organizing high-impact workshops, coding competitions,
          research seminars, and project showcases. My primary responsibility was ensuring technical excellence,
          innovation-driven programming, and practical skill development for students.
        </p>

        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="${groupPhoto}"
            alt="IEEE CS IIUC Team Group Photo"
            class="max-w-sm object-cover rounded-xl"
          />
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-2">Key Contributions:</h4>
          <ul class="list-disc pl-6 space-y-1">
            <li>Planned and executed technical workshops and seminars</li>
            <li>Supported research culture and conference participation</li>
            <li>Coordinated technical teams and strengthened chapter visibility</li>
          </ul>
        </div>

        <p>
          This position was not only about management—it was about building a stronger technical community and creating
          meaningful opportunities for student growth.
        </p>

      </div>
    `,
  },

  // =========================
  // ICCIT 2025 Paper Presentation
  // =========================
  {
    slug: "iccit-2025-paper-presentation",
    title: "ICCIT 2025 — 28th International Conference on Computer and Information Technology",
    excerpt:
      "Presented our research paper at ICCIT 2025 (IEEE Bangladesh Section), held at Long Beach Hotel, Cox’s Bazar.",
    date: "December 19, 2025",
    readTime: "4 min read",
    tags: ["IEEE", "Conference", "Research", "ICCIT", "Deep Learning"],
    image: iccit4, // ✅ banner as cover looks best
    gallery: [iccit4, iccit1, iccit2, iccit3],
    content: `
      <div class="space-y-10">


        <p>
          I had the honor of presenting our research paper at the
          <strong>28th International Conference on Computer and Information Technology (ICCIT 2025)</strong>,
          organized by IEEE Bangladesh Section and held at Long Beach Hotel, Cox’s Bazar.
        </p>

        <!-- Badge / Venue -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="${iccit1}"
              alt="ICCIT 2025 Badge"
              class="max-w-sm object-cover rounded-xl"
            />
          </div>
          <div class="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="${iccit2}"
              alt="ICCIT 2025 Conference Venue"
              class="max-w-sm object-cover rounded-xl"
            />
          </div>
        </div>

        <div>
          <p class="mb-3">The presented paper titled:</p>
          <h3 class="text-lg font-semibold">
            “Comparing Deep Learning Models for the Recognition of Leaf Diseases in Cucurbit Crops”
          </h3>
        </div>

        <p>
          The study focused on evaluating multiple deep learning architectures for agricultural disease detection,
          comparing performance, and considering practical deployment perspectives.
        </p>

        <!-- Certificate -->
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="${iccit3}"
            alt="ICCIT 2025 Certificate of Appreciation"
            class="max-w-sm object-cover rounded-xl"
          />
        </div>

        <p>
          Presenting at ICCIT 2025 provided valuable exposure to researchers, academics, and industry professionals.
          The interactive sessions, technical discussions, and expert feedback contributed significantly to refining
          our research perspective.
        </p>

        <div>
          <h4 class="font-semibold text-lg mb-2">Key Highlights:</h4>
          <ul class="list-disc pl-6 space-y-1">
            <li>Official paper presentation at IEEE ICCIT 2025</li>
            <li>Comparative deep learning study on crop disease recognition</li>
            <li>Networking with scholars and professionals</li>
            <li>Received a Certificate of Appreciation</li>
          </ul>
        </div>

        <p>
          This conference marked an important milestone in my research journey, strengthening my commitment to
          AI-driven solutions in agriculture and real-world problem solving.
        </p>

      </div>
    `,
  },
];

