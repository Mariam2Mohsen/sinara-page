import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact-section py-16" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-semibold text-center text-primary-foreground mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          We’d love to hear from you! Let us know how we can help or share your feedback.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="bg-card p-8 shadow-lg rounded-lg">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-ring focus:border-ring"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-ring focus:border-ring"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 block w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-ring focus:border-ring"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-card p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-6">
              Reach out to us via the information below, and we’ll get back to you as soon as possible.
            </p>
            <div>
              <p className="text-primary-foreground font-medium mb-1">Email:</p>
              <p className="text-muted-foreground mb-4">support@sinara.com</p>
              <p className="text-primary-foreground font-medium mb-1">Phone:</p>
              <p className="text-muted-foreground mb-4">+1 (123) 456-7890</p>
              <p className="text-primary-foreground font-medium mb-1">Address:</p>
              <p className="text-muted-foreground">
                123 Sinara Lane, Learning City, Knowledge State
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
