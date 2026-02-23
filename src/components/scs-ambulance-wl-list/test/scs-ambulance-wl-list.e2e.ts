import { newE2EPage } from '@stencil/core/testing';

describe('scs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scs-ambulance-wl-list></scs-ambulance-wl-list>');

    const element = await page.find('scs-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
