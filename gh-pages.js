var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/metacrypt-me/mcrypt.git',
        user: {
            name: 'MetaCrypt Stake Pool',
            email: 'staff@mcrypt.me'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
