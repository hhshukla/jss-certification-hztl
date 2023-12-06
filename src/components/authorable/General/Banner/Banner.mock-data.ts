import { bannerDataProps } from './Banner';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: bannerDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    contentPosition: {
      value: 'default',
    },
    cta: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Learn more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    description: {
      value:
        '<p>Join Horizontal at Connections 2023 and discover how we create personalized and connected experiences tailored for every customer.</p>',
    },
    image: {
      value: {
        src: 'https://scfedisc.dev.local/-/media/dummy-banner-image.png?h=1080&iar=0&w=1920&hash=46A21B3638D32FC1565FF965ACF25016',
        alt: 'Dummy Image',
        width: '1920',
        height: '1080',
      },
    },
    link: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    title: {
      value: 'Connected experiences fine-tuned for your customers',
    },
  },
};

export const PrimaryBannerData: bannerDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    contentPosition: {
      value: 'center',
    },
    cta: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Learn more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    description: {
      value:
        '<p>Join Horizontal at Connections 2023 and discover how we create personalized and connected experiences tailored for every customer.</p>',
    },
    image: {
      value: {
        src: 'https://scfedisc.dev.local/-/media/dummy-banner-image.png?h=1080&iar=0&w=1920&hash=46A21B3638D32FC1565FF965ACF25016',
        alt: 'Dummy Image',
        width: '1920',
        height: '1080',
      },
    },
    link: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    title: {
      value: 'Connected experiences fine-tuned for your customers',
    },
  },
};
export const SecondaryBannerData: bannerDataProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    contentPosition: {
      value: 'right',
    },
    cta: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Learn more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    description: {
      value:
        '<p>Join Horizontal at Connections 2023 and discover how we create personalized and connected experiences tailored for every customer.</p>',
    },
    image: {
      value: {
        src: 'https://scfedisc.dev.local/-/media/dummy-banner-image.png?h=1080&iar=0&w=1920&hash=46A21B3638D32FC1565FF965ACF25016',
        alt: 'Dummy Image',
        width: '1920',
        height: '1080',
      },
    },
    link: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    title: {
      value: 'Connected experiences fine-tuned for your customers',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
