import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <p className="w-[300px]">
          <p className="text-3xl">CareerHub</p>
          <br />
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>

        <img src={"public/Group 9969.png"} alt="" />
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Work</a>
        <a className="link link-hover">Latest News</a>
        <a className="link link-hover">Career</a>
      </nav>
      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Prototype</a>
        <a className="link link-hover">Plans & Pricing</a>
        <a className="link link-hover">Customers</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Help Desk</a>
        <a className="link link-hover">Sales</a>
        <a className="link link-hover">Become a Partner</a>
        <a className="link link-hover">Developers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">524 Broadway , NYC</a>
        <a className="link link-hover">+1 777 - 978 - 5570</a>
      </nav>
    </footer>
  );
};

export default Footer;
