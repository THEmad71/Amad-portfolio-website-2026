// src/posts.ts
import ictAmbassadorPoster from "../assets/Thoughts/Ict olympiad/ambassador-poster.jpg";
import ictSpeechImage from "../assets/Thoughts/Ict olympiad/ictSpeechImage.jpeg";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
  tags?: string[];
}

export const posts: Post[] = [
  {
    slug: "ict-olympiad-campus-ambassador-leader",
    title: "ICT Olympiad Bangladesh — Campus Ambassador Leader (Season 3)",
    excerpt:
      "A leadership journey of promoting technology, inspiring students, and representing my university at a national ICT platform.",
    date: "Oct 2024",
    readTime: "4 min read",
    tags: ["Leadership", "ICT Olympiad", "Campus Ambassador", "Public Speaking"],
    image: ictAmbassadorPoster,
    content:
      `
    <div class="space-y-6">
<div class="overflow-hidden rounded-xl flex justify-start">
</div>

      <p>
        Being selected as a Campus Ambassador Leader for ICT Olympiad Bangladesh (Season 3)
        was both an honor and a responsibility. Representing International Islamic University Chittagong,
        I worked to promote technology-driven learning and encourage students to participate
        in one of the country's largest ICT competitions.
      </p>

      <p>
        My role involved organizing awareness campaigns, guiding participants,
        and coordinating with the national organizing team. Through this experience,
        I strengthened my communication, leadership, and community-building skills.
      </p>

      <div class="overflow-hidden rounded-xl flex justify-start">
        <img src="${ictSpeechImage}" 
             alt="Delivering speech during ICT Olympiad campaign" 
             class="max-w-sm object-cover rounded-xl" />
      </div>

      <p>
        One of the most impactful moments of this journey was delivering a speech
        during our campus campaign session. Standing in front of students and
        motivating them to participate in a national-level technology competition
        was truly inspiring.
      </p>

      <p>
        ICT Olympiad was not just an event — it was a movement to inspire future
        technologists and innovators.
      </p>

    </div>
  `,
  },
  {
    slug: "ai-design",
    title: "AI & Design",
    excerpt:
      "Exploring how artificial intelligence is reshaping the product design landscape and what it means for designers.",
    date: "February 15, 2026",
    readTime: "5 min read",
    tags: ["Design", "AI", "Thoughts"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    content: `Full details content...`,
  },
];