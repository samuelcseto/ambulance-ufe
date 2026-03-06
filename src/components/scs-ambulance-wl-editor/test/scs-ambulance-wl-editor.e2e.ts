import { newE2EPage } from '@stencil/core/testing';

describe('scs-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scs-ambulance-wl-editor></scs-ambulance-wl-editor>');

    const element = await page.find('scs-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
