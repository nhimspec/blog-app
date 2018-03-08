import child_process from 'child_process';

const args = [ 'start' ];
// const optsFront = { stdio: 'inherit', cwd: 'client/front', shell: true};
const optsAdmin = { stdio: 'inherit', cwd: 'client/admin', shell: true};

// child_process.spawn('npm', args, optsFront);
child_process.spawn('npm', args, optsAdmin);
