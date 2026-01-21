import React from 'react';

interface DirectAnswerProps {
    city: string;
    service: string;
    answer: string;
}

export const DirectAnswer: React.FC<DirectAnswerProps> = ({ city, service, answer }) => {
    return (
        <div className="bg-blue-50 border-r-4 border-blue-500 p-6 my-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-900">
                ملخص سريع عن {service} في {city}
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
                {answer}
            </p>
        </div>
    );
};
