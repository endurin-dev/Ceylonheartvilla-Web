export default function Footer() {
return (
<footer className="bg-neutral-900 text-neutral-300 mt-20">
<div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
<div>
<h3 className="text-white font-semibold text-lg">Ceylon Heart Villa</h3>
<p className="text-sm mt-3">
A peaceful luxury retreat surrounded by nature.
</p>
</div>


<div>
<h4 className="text-white font-medium mb-3">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li>Accommodation</li>
<li>Yoga Space</li>
<li>Activities</li>
<li>Contact Us</li>
</ul>
</div>


<div>
<h4 className="text-white font-medium mb-3">Contact</h4>
<p className="text-sm">Sri Lanka</p>
<p className="text-sm">info@ceylonheartvilla.com</p>
</div>
</div>


<div className="text-center text-xs text-neutral-500 py-4 border-t border-neutral-800">
© {new Date().getFullYear()} Ceylon Heart Villa. All rights reserved.
</div>
</footer>
);
}