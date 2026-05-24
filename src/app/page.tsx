import { Navbar } from '@/components/ui/Navbar';
import { getPageBySlug, strapiImageUrl } from '@/lib/strapi';
import type { ServiceWorkflowData, TabId } from '@/components/ServiceWorkflow/types';
import type { StrapiRichTextNode } from '@/types/strapi';

function extractRichText(nodes: StrapiRichTextNode[]): string {
  return nodes
    .flatMap((n) => n.children.map((c) => c.text))
    .join(' ')
    .trim();
}

function parseWorkingHours(text: string): { days: string; hours: string }[] {
  const colonIdx = text.indexOf(': ');
  if (colonIdx === -1) return [{ days: text, hours: '' }];
  return [{ days: text.slice(0, colonIdx), hours: text.slice(colonIdx + 2) }];
}

export default async function Home() {
  let workflowData: ServiceWorkflowData | null = null;

  try {
    const { data } = await getPageBySlug('home');
    const page = data[0];

    if (page) {
      const voteCountMatch = page.ratting?.description?.match(/(\d+)/);
      const voteCount = voteCountMatch ? parseInt(voteCountMatch[1], 10) : 0;

      workflowData = {
        title: page.title,
        serviceDescription: extractRichText(page.service_description ?? []),

        serviceCardDetails: (page.service_card_details ?? []).map((card) => ({
          title:           card.title,
          cardDescription: card.card_description,
          bgColor:         card.bg_color,
          iconUrl:         strapiImageUrl(card.icon?.[0]?.url),
        })),

        serviceImages: (page.service_Image ?? []).map((img) => ({
          id:                   img.id,
          label:                img.label,
          imageFit:             img.imageFit,
          lightDesktopImageUrl: strapiImageUrl(img.lightDesktopImage?.url),
          lightMobileImageUrl:  strapiImageUrl(img.lightMobileImage?.url),
          darkDesktopImageUrl:  strapiImageUrl(img.darkDesktopImage?.url),
          darkMobileImageUrl:   strapiImageUrl(img.darkMobileImage?.url),
        })),

        tabs: (page.tab ?? [])
          .sort((a, b) => a.order - b.order)
          .map((t) => ({
            id:    t.id,
            order: t.order,
            title: t.title,
            tabId: (t.order === 1 ? 'workflow' : 'details') as TabId,
          })),

        rating: {
          title:         page.ratting?.title ?? 'Service Level Evaluation',
          voteCount,
          value:         page.ratting?.Ratting ?? 0,
          iconUrl:       strapiImageUrl(page.ratting?.icon?.url),
          ratingIconUrl: strapiImageUrl(page.ratting?.rattingIcon?.[0]?.url),
        },

        faq: {
          title:       page.faq?.title ?? '',
          description: page.faq?.description ?? '',
          iconUrl:     strapiImageUrl(page.faq?.icon?.url),
        },

        deliveryChannels: {
          title:    page.share?.title ?? 'Service delivery channels',
          channels: (page.share?.description ?? '')
            .split('\n')
            .map((s) => s.replace(/^-\s*/, '').trim())
            .filter(Boolean),
          iconUrl:  strapiImageUrl(page.share?.icon?.url),
        },

        customerService: {
          heading:     page.contect?.contactHeading ?? 'Customer service',
          contacts:    (page.contect?.phoneNumbers ?? []).map((p) => ({
            region: p.label,
            phone:  p.number,
          })),
          workingHours: parseWorkingHours(page.contect?.workingHours ?? ''),
        },

        advertisement: page.Advertisement?.[0]
          ? {
              label:       page.Advertisement[0].label,
              description: page.Advertisement[0].description,
              bgColor:     page.Advertisement[0].bg_color,
              imageUrl:    strapiImageUrl(page.Advertisement[0].lightDesktopImage?.url),
              storeIcons:  (page.Advertisement[0].promotionalBanner ?? []).map((b) => ({
                iconUrl: strapiImageUrl(b.icon?.url),
              })),
            }
          : null,
      };
    }
  } catch (err) {
    console.error('[Strapi] getPageBySlug("home") failed:', err);
  }

  return (
    <main>
      <Navbar workflowData={workflowData} />
    </main>
  );
}
