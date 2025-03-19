export function getRandomHackathonIdea(): string {
  const ideas = ['Augmented reality application', 'Automated customer service chatbot', 'Virtual event planning platform', 'Smart home automation system', 'Healthcare data analysis software'];
  return ideas[Math.floor(Math.random() * ideas.length)];
}
