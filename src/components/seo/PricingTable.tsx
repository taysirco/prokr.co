import React from 'react';

export interface PricingTableItem {
    serviceType: string;
    priceRange: string;
    timeEstimate: string;
}

interface PricingTableProps {
    title: string;
    data: PricingTableItem[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ title, data }) => {
    return (
        <div className="my-8 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <h3 className="bg-gray-100 p-4 font-bold text-center text-xl text-gray-800 border-b border-gray-200">
                {title}
            </h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-right" dir="rtl">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                                نوع الخدمة / الحجم
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                                السعر التقريبي
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                                الوقت المستغرق
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100 transition-colors'}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {item.serviceType}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">
                                    {item.priceRange}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.timeEstimate}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 p-3 text-center bg-gray-50 border-t border-gray-200">
                * الأسعار تقريبية وقد تختلف بناءً على المعاينة الفعلية ومتطلبات العميل.
            </p>
        </div>
    );
};
