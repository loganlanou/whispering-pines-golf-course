"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (element?: HTMLElement) => void;
      };
    };
  }
}

export default function FacebookFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      // Check if SDK is already loaded
      if (document.getElementById("facebook-jssdk")) {
        // If already loaded, just parse
        if (window.FB) {
          window.FB.XFBML.parse(containerRef.current || undefined);
        }
        return;
      }

      // Create script element
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";

      // Insert before first script
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode?.insertBefore(script, firstScript);

      // Parse on load
      script.onload = () => {
        if (window.FB && containerRef.current) {
          window.FB.XFBML.parse(containerRef.current);
        }
      };
    };

    loadFacebookSDK();
  }, []);

  return (
    <div ref={containerRef} className="facebook-feed-container">
      {/* Facebook Page Plugin */}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/whisperingpinesgc"
        data-tabs="timeline"
        data-width=""
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/whisperingpinesgc"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/whisperingpinesgc">
            Whispering Pines Golf Course
          </a>
        </blockquote>
      </div>

      {/* Fallback/Loading State */}
      <noscript>
        <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[var(--pine-green)] mb-2">
            Follow Us on Facebook
          </h3>
          <p className="text-gray-600 mb-4">
            Enable JavaScript to see our Facebook feed, or visit us directly.
          </p>
          <a
            href="https://www.facebook.com/whisperingpinesgc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 rounded-full inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Visit Our Facebook Page
          </a>
        </div>
      </noscript>

      {/* Styling for the container */}
      <style jsx>{`
        .facebook-feed-container {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          min-height: 600px;
        }

        .facebook-feed-container .fb-page {
          width: 100%;
        }

        .facebook-feed-container iframe {
          border-radius: 1rem;
        }

        @media (max-width: 768px) {
          .facebook-feed-container {
            min-height: 500px;
          }
        }
      `}</style>
    </div>
  );
}
