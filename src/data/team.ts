export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  desc_1: string;
  desc_2: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sam Rey",
    role: "Founder & CEO",
    photo: "../../../public/images/team-member-1.png",
    desc_1: "Leading the company’s strategic vision and daily operations with a focus on operational excellence, compliance, and patient-centered care. As a licensed health insurance agent specializing in Medicare Advantage and managed care solutions, he works closely with senior living facilities, patients, and families to support onboarding, insurance coordination, enrollment, and ongoing care assistance.",
    desc_2: "Before founding Panther Services, Dave spent over a decade managing commercial mechanical service operations in the HVAC industry, gaining experience in operations management, process improvement, and team leadership. Under his leadership, the company helps senior living communities streamline managed care processes, improve patient transitions, and enhance support for residents and their families."
  },
  {
    name: "Alex Wen",
    role: "Chief Medical Officer",
    photo: "../../../public/images/team-member-2.png",
    desc_1: "He leads sales and account management with a focus on building strong relationships and streamlining Medicare enrollment for senior living communities, patients, and families. He brings experience in healthcare finance, accounts payable, and mortgage brokerage, where he built a reputation for being dependable, organized, and easy to work with.",
    desc_2: "Known for his warm and approachable personality, Sam has a relationship-driven style that helps clients and partners feel comfortable and confident during difficult situations. He takes pride in simplifying complex processes and serving as a reliable point of contact. At Panther Services, he focuses on growing partnerships, driving sales, and ensuring every interaction is handled with clarity, responsiveness, and care"
  },
];
