// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface BannerFields {
  contentPosition: Field<string>;
  cta: LinkField;
  description: Field<string>;
  image: ImageField;
  link: LinkField;
  title: Field<string>;
}

export type bannerDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: BannerFields;
};

const Banner = ({ fields }: bannerDataProps) => {
  if (fields === null || fields === undefined) return <></>;

  return (
    <div data-component="authorable/general/banner" data-testid="banner">
      <div className="relative">
        <Image field={fields?.image} className="onject-cover  text-white" />
        <div className="md:m-8 md:p-4 md:absolute inset-0  md:flex md:justify-center flex-col ">
          <div className={'container mx-auto'}>
            <div
              className={clsx('md:flex rounded-md overflow z-10 ', {
                'sm:flex sm:flex-col': fields?.contentPosition?.value === 'default',
                'sm:flex-col-reverse': fields?.contentPosition?.value === 'secondary',
                'sm:flex-col': fields?.contentPosition?.value === 'right',
              })}
            >
              <div
                className={clsx('md:m-2 p-4 font-sans text-2xl flex flex-col md:rounded-lg ', {
                  'bg-black': fields?.contentPosition?.value === 'default',
                  'md:bg-orange-600 md:bg-opacity-30  text-white md:text-green-500 justify-center items-start md:p-4 m-2 ':
                    fields?.contentPosition?.value === 'default',
                  'bg-blue-500 text-white md:bg-white md:bg-opacity-30  md:text-blue-500  justify-center items-center':
                    fields?.contentPosition?.value === 'center',
                  'bg-green-600 bg-opacity-30 text-orange-500  justify-end items-end p-4 md:m-2':
                    fields?.contentPosition?.value === 'right',
                })}
              >
                <Text
                  tag="h4"
                  className={clsx('mt-2   font-bold font-sans ', {
                    ' text-start': fields?.contentPosition?.value === 'default',
                    ' text-center': fields?.contentPosition?.value === 'center',
                    ' text-end': fields?.contentPosition?.value === 'right',
                  })}
                  field={fields?.title}
                />
                <RichTextA11yWrapper
                  className={clsx('mt-4  font-sans font-bold', {
                    ' text-start': fields?.contentPosition?.value === 'default',
                    ' text-center': fields?.contentPosition?.value === 'center',
                    ' text-end': fields?.contentPosition?.value === 'right',
                  })}
                  field={fields?.description}
                  editable
                />
                <div className="flex mt-4 text-center justify-between">
                  <LinkWrapper
                    field={fields?.cta}
                    className={clsx(
                      'p-2 text-center w-[150px] cursor-pointer   rounded-md font-sans decoration-2 font-bold',
                      {
                        ' md:text-xl bg-black text-white md:bg-white md:text-green-500 hover:bg-green-500 hover:text-white hover:no-underline ':
                          fields?.contentPosition?.value === 'default',

                        'text-lg md:text-xl hover:bg-blue-500 hover:text-white   bg-white text-blue-500  hover:no-underline':
                          fields?.contentPosition?.value === 'center',
                        'text-lg md:text-xl bg-white  text-orange-500 md:bg-white md:text-orange-500 hover:bg-orange-400 hover:no-underline hover:text-white ':
                          fields?.contentPosition?.value === 'right',
                      }
                    )}
                  />
                  <LinkWrapper
                    field={fields?.link}
                    className={clsx(
                      'p-2 text-center w-[150px]  rounded-md font-sans hover:underline decoration-2 font-semibold',
                      {
                        'text-lg md:text-xl  text-white  md:text-green-500  hover:text-white cursor-pointer ':
                          fields?.contentPosition?.value === 'default',

                        'text-lg md:text-xl  text-white  md:text-blue-500  hover:text-blue-500 cursor-pointer ':
                          fields?.contentPosition?.value === 'center',
                        'text-lg md:text-xl  text-orange-500  hover:text-white cursor-pointer ':
                          fields?.contentPosition?.value === 'right',
                      }
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BannerProps>(Banner);
export default Banner;
