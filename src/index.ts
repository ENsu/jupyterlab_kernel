import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab_kernel extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_kernel',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_kernel is activated!');
  }
};

export default extension;
