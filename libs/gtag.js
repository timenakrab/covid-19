import { ga_tracking_id as googleId } from '../constant/constantWebsite';

export const pageview = url => {
  window.gtag('config', googleId, {
    page_location: url,
  });
};
