import { newE2EPage } from '@stencil/core/testing';

describe('scs-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scs-ambulance-wl-app></scs-ambulance-wl-app>');

    const element = await page.find('scs-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
