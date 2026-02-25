import type { ItemListSchema } from '@/types';

// ============================================
// ITEM LIST SCHEMA
// For listing pages (companies/services/cities)
// ============================================
interface ItemListJsonLdProps {
    type: 'companies' | 'services' | 'cities';
    items: { name: string; url: string }[];
    listName?: string;
    description?: string;
}

export function ItemListJsonLd({ type, items, listName, description }: ItemListJsonLdProps) {
    const defaultNames = {
        companies: 'قائمة الشركات',
        services: 'قائمة الخدمات',
        cities: 'قائمة المدن',
    };

    const schema: ItemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: listName || defaultNames[type],
        description,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
