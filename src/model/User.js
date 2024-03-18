// Mimicking the response from database
const userData = {
  avatar: {
    url: 'avatar.jpg',
    description: 'My avatar with yellow background and headphones on the ear.',
  },
  name: 'Umer Irfan',
  username: 'IIvexII',
  bio: 'Student of Computer Science.',
  address: '127.0.0.1',
  email: 'iivexii@pm.me',
    website: 'https://github.com/XUmer007',
  inDeveloperProgram: true,
  labels: [
    {
      _id: 1,
      name: 'pro',
      type: 'premium',
    },
    {
      _id: 2,
      name: 'developer',
      type: 'gold',
    },
  ],
  orgs: [
    {
      _id: 1,
      icon: 'vex-org.jpg',
      description: 'Vex Organization.',
    },
    {
      _id: 2,
      icon: 'npm-org.png',
      description: 'NPM Organization.',
    },
  ],
};

export default userData;
