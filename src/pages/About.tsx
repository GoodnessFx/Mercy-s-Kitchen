import React from 'react';
import { motion } from 'motion/react';
import { Heart, Award, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            About Mercy's Kitchen
          </h1>
          <p className="text-lg text-muted-foreground">
            Serving Makurdi with love, one delicious meal at a time
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src="/ceo.jpeg"
                alt="Mercy Iyamah - CEO of Mercy's Kitchen"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded by <span className="font-semibold text-primary">Mercy Iyamah</span>, a dedicated Medical Student at <span className="italic">Benue State University</span>, Mercy's Kitchen is the realization of a lifelong passion for culinary excellence.
              </p>
              <p>
                Mercy's journey in the kitchen began as early as <span className="font-semibold text-foreground">JSS3</span>. What started as a young girl's fascination with flavors quickly evolved into a masterful craft. Over the years, she has honed her skills to the point where cooking is no longer just a task, but a natural expression — something she can truly do <span className="italic text-primary">"with her eyes closed."</span>
              </p>
              <p>
                What began as a passion for cooking delicious small chops for family gatherings has grown into Makurdi's trusted catering partner for weddings, birthdays, naming ceremonies, church programs, and more.
              </p>
              <p className="font-semibold text-foreground">
                At Mercy's Kitchen, we don't just cook food — we infuse every plate with the precision of a scientist and the heart of a chef, creating memorable experiences that bring people together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Our Promise to You
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Made with Love
              </h3>
              <p className="text-sm text-muted-foreground">
                Every dish is prepared with care and attention to detail, just like cooking for family
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Quality Guaranteed
              </h3>
              <p className="text-sm text-muted-foreground">
                We use only fresh, quality ingredients and maintain the highest hygiene standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Event Specialists
              </h3>
              <p className="text-sm text-muted-foreground">
                From intimate gatherings to large celebrations, we handle events of all sizes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Timely Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                We understand timing is crucial for events. Count on us to deliver fresh and on time
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          Trusted by Makurdi Families
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Over the years, we've had the privilege of serving hundreds of families across Makurdi, making their special moments even more memorable with delicious food.
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="mb-1 text-4xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Events Catered</p>
          </div>
          <div>
            <p className="mb-1 text-4xl font-bold text-primary">1000+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <p className="mb-1 text-4xl font-bold text-primary">5★</p>
            <p className="text-sm text-muted-foreground">Customer Rating</p>
          </div>
          <div>
            <p className="mb-1 text-4xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Fresh Food</p>
          </div>
        </div>
      </section>
    </div>
  );
};
