import { newSpecPage } from '@stencil/core/testing';
import { ScsAmbulanceWlApp } from '../scs-ambulance-wl-app';

describe('scs-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [ScsAmbulanceWlApp],
      html: `<scs-ambulance-wl-app base-path="/"></scs-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('scs-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [ScsAmbulanceWlApp],
      html: `<scs-ambulance-wl-app base-path="/ambulance-wl/"></scs-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('scs-ambulance-wl-list');
  });
});
