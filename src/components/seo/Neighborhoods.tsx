import React from 'react';

interface NeighborhoodsProps {
    city: string;
    neighborhoods: string[];
}

export const Neighborhoods: React.FC<NeighborhoodsProps> = ({ city, neighborhoods }) => {
    return (
        <div className="my-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                خدماتنا في أحياء {city}
            </h3>
            <p className="mb-4 text-gray-600">
                نحن نتواجد بالقرب منك لتوفير أسرع استجابة. فرقنا موزعة لتغطية أهم الأحياء في {city} بما في ذلك:
            </p>
            <div className="flex flex-wrap gap-2">
                {neighborhoods.map((name, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                        📍 حي {name}
                    </span>
                ))}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    والمزيد...
                </span>
            </div>
        </div>
    );
};
