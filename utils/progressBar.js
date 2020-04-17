import cliProgress from 'cli-progress';
 
const progressBar = new cliProgress.SingleBar({ stopOnComplete: true  }, cliProgress.Presets.shades_classic);
 
export default progressBar;