const initState = {
    projects: [
      {proj_id: '1', title: 'Python Algorithms', author: 'Mark Teffeteller' ,content: 'Python is a high-level programming language designed to be easy to read and simple to implement. It is open source, which means it is free to use, even for commercial applications.'},
      {proj_id: '2', title: 'Networking Fundamentals', author: 'Annabelle Ackling' ,content: 'A computer network is a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes.'},
      {proj_id: '3', title: 'Advanced Spanish', author: 'Beth Deck' ,content: 'Spanish, or Castilian, is a Romance language that originated in the Iberian Peninsula and today has over 483 million native speakers, mainly in Spain and the Americas.'},
      {proj_id: '4', title: 'Google Cloud', author: 'Augusta Meyer' ,content: 'Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail and YouTube. '},
      {proj_id: '5', title: 'Amazon Web Services', author: 'Elliott Ibrahimavic' ,content: 'Amazon Web Services is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.'},
      {proj_id: '6', title: 'React.js', author: 'Quandre Diggs' ,content: 'React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'}
    ]
  }
  
  const projectReducer = (state = initState, action) => {
    return state;
  };
  
  export default projectReducer;