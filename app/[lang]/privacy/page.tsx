"use client";

import { useTranslations } from "@/context/LanguageContext";

export default function Privacy() {
  const t = useTranslations();

  return (
    <main className="pt-24">
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
          <h1 className="text-3xl font-bold mb-8 font-headings">{t.privacy.title}</h1>

          <p>
            Gymbox understands that your privacy is important to you. We are committed to protecting the privacy of your personally-identifiable information as you use this website. This Privacy Policy tells you how we protect and use information that we gather from you. By using this website, you consent to the terms described in the most recent version of this Privacy Policy. You should also read our Terms of Use to understand the general rules about your use of this website, and any additional terms that may apply when you access particular services or materials on certain areas of this website. &ldquo;We,&rdquo; &ldquo;our&rdquo; means Gymbox and its affiliates. &ldquo;You,&rdquo; &ldquo;your,&rdquo; &ldquo;visitor,&rdquo; or &ldquo;user&rdquo; means the individual accessing this site.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Personal and Non-Personal Information</h3>
          <p>Our Privacy Policy identifies how we treat your personal and non-personal information.</p>

          <h3 className="text-xl font-bold mt-8 mb-3">What Is Non-Personal Information And How Is It Collected And Used?</h3>
          <p>
            Non personal information is information that cannot identify you. If you visit this web site to read information, such as information about one of our services, we may collect certain non-personal information about you from your computer&apos;s web browser. Because non-personal information cannot identify you or be tied to you in any way, there are no restrictions on the ways that we can use or share non-personal information. What is personal information and how is it collected? Personal information is information that identifies you as an individual, such as your name, mailing address, e-mail address, telephone number, and fax number. We may collect personal information from you in a variety of ways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you send us an application or other form</li>
            <li>When you conduct a transaction with us, our affiliates, or others</li>
            <li>When we collect information about in you in support of a transaction, such as credit card information</li>
            <li>In some places on this web site you have the opportunity to send us personal information about yourself, to elect to receive particular information, to purchase access to one of our products or services, or to participate in an activity.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">Are Cookies Or Other Technologies Used To Collect Personal Information?</h3>
          <p>
            Yes, we may use cookies and related technologies, such as web beacons, to collect information on our web site. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page.
          </p>
          <p>
            You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Gymbox websites you visit.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">How Does Gymbox Use Personal Information?</h3>
          <p>
            Gymbox may keep and use personal information we collect from or about you to provide you with access to this web site or other products or services, to respond to your requests, to bill you for products/services you purchased, and to provide ongoing service and support, to contact you with information that might be of interest to you, including information about products and services of ours and of others, or ask for your opinion about our products or the products of others, for record keeping and analytical purposes and to research, develop and improve programs, products, services and content.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Does Gymbox Share Personal Information With Others?</h3>
          <p>
            We will not share your personal information collected from this web site with an unrelated third party without your permission, except as otherwise provided in this Privacy Policy. In the ordinary course of business, we may share some personal information with companies that we hire to perform services or functions on our behalf. In all cases in which we share your personal information with a third party for the purpose of providing a service to us, we will not authorize them to keep, disclose or use your information with others except for the purpose of providing the services we asked them to provide.
          </p>
          <p>
            We will not sell, exchange or publish your personal information, except in conjunction with a corporate sale, merger, dissolution, or acquisition.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">How Is Personal Information Used For Communications?</h3>
          <p>
            We may contact you periodically by e-mail, mail or telephone to provide information regarding programs, products, services and content that may be of interest to you. In addition, some of the features on this web site allow you to communicate with us using an online form. If your communication requests a response from us, we may send you a response via e-mail. The e-mail response or confirmation may include your personal information. We cannot guarantee that our e-mails to you will be secure from unauthorized interception.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">How Is Personal Information Secured?</h3>
          <p>
            We have implemented generally accepted standards of technology and operational security in order to protect personally-identifiable information from loss, misuse, alteration, or destruction. Only authorized personnel and third party vendors have access to your personal information, and these employees and vendors are required to treat this information as confidential. Despite these precautions, we cannot guarantee that unauthorized persons will not obtain access to your personal information.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Links</h3>
          <p>
            This site contains links to other sites that provide information that we consider to be interesting. Gymbox is not responsible for the privacy practices or the content of such web sites.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">How Can A User Access, Change, And/or Delete Personal Information?</h3>
          <p>
            You may access, correct, update, and/or delete any personally-identifiable information that you submit to the web site. You may also unsubscribe from mailing lists or any registrations on the web site. To do so, please either follow instructions on the page of the web site on which you have provided such information or subscribed or registered or contact us at <a href="mailto:kees@gymboxcrossfit.nl" className="text-primary hover:underline">kees@gymboxcrossfit.nl</a>.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Children&apos;s Privacy</h3>
          <p>
            Gymbox will not intentionally collect any personal information (such as a child&apos;s name or email address) from children under the age of 13. If you think that we have collected personal information from a child under the age of 13, please contact us.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Changes</h3>
          <p>
            Gymbox reserves the right to modify this statement at any time. Any changes to this Privacy Policy will be listed in this section, and if such changes are material, a notice will be included on the homepage of the web site for a period of time. If you have any questions about privacy at any websites operated by Gymbox or about our website practices, please contact us at: <a href="mailto:kees@gymboxcrossfit.nl" className="text-primary hover:underline">kees@gymboxcrossfit.nl</a>.
          </p>

          {/* Cookie Policy */}
          <h2 className="text-2xl font-bold mt-12 mb-6 font-headings">Cookie Policy</h2>

          <h3 className="text-xl font-bold mt-8 mb-3">About this Cookie Policy</h3>
          <p>
            This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used and how to control the cookie preferences. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.
          </p>
          <p>You can at any time change or withdraw your consent from the Cookie Declaration on our website. Your consent applies to the current domain.</p>

          <h3 className="text-xl font-bold mt-8 mb-3">What are Cookies?</h3>
          <p>
            Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">How do we use cookies?</h3>
          <p>
            As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data. The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">What types of cookies do we use?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Essential:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.</li>
            <li><strong>Statistics:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit etc. These data help us understand and analyze how well the website performs and where it needs improvement.</li>
            <li><strong>Marketing:</strong> Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. These cookies also help us keep track of the efficiency of these ad campaigns.</li>
            <li><strong>Functional:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing contents on the website on social media platforms.</li>
            <li><strong>Preferences:</strong> These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">How can I control my cookie preferences?</h3>
          <p>
            Should you decide to change your preferences later through your browsing session, you can click on the &ldquo;Privacy &amp; Cookie Policy&rdquo; tab on the lower right hand of your screen. This will display the consent notice again enabling you to withdraw your consent entirely. In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Contact</h3>
          <p>
            <strong>Telefoonnummer:</strong> <a href="tel:0648728580" className="text-primary hover:underline">064 872 8580</a><br />
            <strong>Email:</strong> <a href="mailto:welkom@gymboxcrossfit.nl" className="text-primary hover:underline">welkom@gymboxcrossfit.nl</a>
          </p>
          <p>
            <strong>Adres:</strong><br />
            Gymbox<br />
            Keyserswey 26<br />
            2201 CW Noordwijk
          </p>
        </div>
      </section>
    </main>
  );
}
