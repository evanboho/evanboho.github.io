'use strict';

window.FIXTURES = {};

FIXTURES.content = [
  {
    id: 0,
    url: '',
    title: 'WELCOME',
    body: 'Karen Hurley Kuchar Consulting, Inc. facilitates personal and organizational transitions by deeply listening for and articulating their vision and together charting a course to the desired future.\n\nWe believe that individuals and organizations have the power to transform their lives and work through connecting to a deep personal purpose, creating a community with a shared vision and focused action to bring about their chosen future.  The coach or facilitator creates a space for a collaborative process that will result in alignment, clear intention and a plan of action.  The hallmarks of our consulting practice are presence, collaboration and a focus on both process and results.'
  },
  {
    id: 1,
    url: 'about',
    link: 'About',
    title: 'About',
    body: "<h4>Principal:</h4>\n\nKaren Hurley Kuchar has a unique combination of 20 years of executive experience and a career in  counseling and group facilitation.  She has a collaborative leadership style that focuses on both the process of decision-making and taking action.  She has a proven track record in leading nonprofit organizations through transformative change by successfully engaging board and staff in a shared vision and action plan process to achieve growth in programs, facilities and fund development. She has a strong interest and talent in developing leaders and highly functioning teams.\n\nKaren has a particular expertise in executive transition, developing leaders and succession planning.  She documented her own year-long transition after 16 years as leader through writing and poetry and encourages the use of expressive writing in navigating personal transitions.\n\nKaren holds a Master of Science degree in Counseling Psychology, with additional graduate work in business and nonprofit management.  Her skills and past experience as a psychotherapist and group facilitator have contributed to her understanding of both group dynamics and the work of many social service organizations.  She is a Leadership Coaching Specialist, with experience coaching executives and aspiring leaders."
  },
  {
    id: 2,
    url: 'consulting',
    link: 'Consulting',
    title: 'Consulting',
    imgAlt: '"We can not solve our problems with the same level of thinking that created them"<br><br> <div class="attrib">~ Einstein</div><br>',
    body: "<h4>Board Development</h4>\n\nSuccessful nonprofits develop boards whose members have both a strong connection to the mission and to the community through intentional board development.  The inflection points of significant growth, new or renewed vision, challenges to sustainability and leadership transition provide opportunities for strengthening the board.  KHK Consulting can help the board and organization navigate and thrive during these growth points.  Our customized approach will:\n\n* Establish a clear and shared understanding of the current situation - the board's strengths and the challenges it faces\n* collaboratively create a vision of the desired future\n* foster alignment and commitment to the vision, mission and values\n* develop a plan of action and support implementation, including board recruitment, orientation and ongoing training\n\n<h4>Leadership Transition</h4>\n\nThe departure of senior leadership presents a challenge and on opportunity to the organization.  KHK Consulting can:\n\n* Proactively assist with succession planning to develop leaders across the organization and prepare for leadership transitions at all levels.\n* Establish a Transition Team of staff and board members to gather staff perspectives on the needs of the organization, the strengths of the culture, and the key competencies required of a new chief executive.  This team also provides a vehicle for two-way communication with the search committee of the board, serving to keep staff informed about the process and address any anxieties brought on by the change.\n* Create a position description that captures the requirements of the role as well as the organization's mission and vision, in order to attract high potential candidates\n* Activate Search - consultant support varies according to the organization's city to conduct the search.  Activities may include assisting the Search Committee in setting up the plan, surfacing candidates, screening resumes, phone interviews, in-person interviews and final candidates.\n\n<h4>Strategic Planning</h4>\n\nA strategic planning process tailored to the organization's needs will align board, staff and community in a shared vision, clear mission and values, and a commitment to an action plan.  A comprehensive plan will include stakeholder input through focus groups and surveys, a retreat, action teams and a final plan document.  Some organizations choose a shorter process to refine or adjust priorities in an existing long-range plan.  KHK Consulting can design and implement a process customized to your needs and resources.\n\nin organizations are asked to foster alignment with the vision and mission, build and motivate teams, establish and accomplish goals and target objectives.  This role can be daunting -- requiring interpersonal skills, strategic thinking and an ability to achieve results.  Many leaders identify a gap between their current level of functioning and performance and the leader they aspire to be."
  },
  {
    id: 3,
    url: 'coaching',
    link: 'Coaching',
    title: 'Coaching',
    body: "Leaders in organizations are asked to foster alignment with the vision and mission, build and motivate teams, establish and accomplish goals and target objectives. This role can be daunting-- requiring interpersonal skills, strategic thinking and an ability to achieve results. Many leaders identify a gap between their current level of functioning and performance and the leader they aspire to be. \n\nLeadership coaching is an going partnership between the leader and coach designed to:\n\n* clarify and articulate the individual's vision, passion and desires for the future, both professionally and personally\n* explore the current reality - the leader's skills, style, strengths and weaknesses, fit with their current position, level of performance. Assessments and 360 degree feedback may be used to gain wider perspectives\n* create a strategy for change, an action plan that will chart a course for the chosen growth and development, may include skill development in communication, supervision, time management and mentoring.\n\nIn the course of the coaching relationship, the coachee will discover and develop confidence in their own style of leadership, resulting in an authentic presence that inspires trust and builds a collaborative and productive team.\n\nThe frequency, length of session and scope of work are mutually agreed upon at the onset. Sessions may be in person or over the phone."
  },
  {
    id: 4,
    url: 'leadership-circles',
    link: 'Leadership Circles',
    title: 'Leadership Circles',
    body: 'The Leadership Circle for Nonprofit Executives is a membership group that meets on a regular\nbasis and provides a confidential forum for chief executives to focus on strategic issues in the organization and personal leadership development. \n\nMeetings:\n\n• Offer members support and challenge from a peer group that understands their unique role in an organization\n\n• Hold members accountable to personal and organizational goals\n\n• Define and track Key Performance Indicators, as identified by the members\n\n• Provide each member an annual opportunity to share in depth their concerns and organizational strategies and priorities and receive feedback from the group\n\n• Build a network of nonprofit professionals who share information and resources and serve as a sounding board during and between meetings\n\nExecutives can join a cohort group that meets 7-9 times during the year. Contact Karen Kuchar at karen@khkuchar.com for availability.'
  },
  {
    id: 5,
    url: 'contact',
    link: 'Contact',
    title: 'Contact',
    body: 'For further information, please contact karen@khkuchar.com or call 630-649-9805'
  }
];

FIXTURES.imgUrls = {
  '': 'http://evanboho.github.io/khk/assets/goldfish.jpg',
  'about': 'http://evanboho.github.io/khk/assets/karen-large.jpg',
  'coaching': 'http://evanboho.github.io/khk/assets/stickies.jpg',
  'leadership-circles': 'http://evanboho.github.io/khk/assets/swirl.jpg',
  'contact': 'http://evanboho.github.io/khk/assets/vineyard.jpg',
};

// preload images for all panes.
for (var key in FIXTURES.imgUrls) {
  if (FIXTURES.imgUrls.hasOwnProperty(key)) {
    new Image().src = FIXTURES.imgUrls[key];
  }
}
