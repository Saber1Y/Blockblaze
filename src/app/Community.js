import React from 'react';
import Button from '@/components/Button';

const Community = () => {
    return (
        <section className="relative text-center bg-people bg-center bg-cover bg-no-repeat  flex flex-col items-center justify-center p-4">
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
            <div className="relative z-10">
                <h1 className="text-5xl tracking-wide font-bold text-white">Join Our Gaming Community</h1>
                <p className="font-raleway my-3 font-semibold text-white">Connect with fellow gamers, stay updated, and share your blockchain gaming experiences.</p>
                <ol className="list-decimal list-inside text-white">
                    <li>
                        <b>Stay Updated:</b> <span className="font-raleway tracking-wide">Get the latest news, updates, and insights on your favorite blockchain games.</span>
                    </li>
                    <li>
                        <b>Participate in Events:</b> <span className="font-raleway tracking-wide">Engage in community events, tournaments, and exclusive NFT drops.</span>
                    </li>
                    <li>
                        <b>Share Experience:</b> <span className="font-raleway tracking-wide">Discuss strategies, share tips, and showcase your achievements with like-minded gamers.</span>
                    </li>
                    <li>
                        <b>Access Exclusive Contents:</b> <span className="font-raleway tracking-wide">Enjoy members-only content, guides, and tutorials to enhance your experience.</span>
                    </li>
                </ol>
                <button className="border-none rounded-lg bg-purple-700 text-white px-6 py-2 mt-4">
                    Join now
                </button>
            </div>
        </section>
    );
};

export default Community;
