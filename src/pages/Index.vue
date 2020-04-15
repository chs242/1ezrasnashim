<template>
  <Layout>
    <IndexBanner />
    <IndexSection1 />
    <IndexSection2 />
    <IndexSection3 />
    <IndexSection4 />
  </Layout>
</template>

<script>
import IndexBanner from "~/components/IndexBanner";
import IndexSection1 from "~/components/IndexSection1";
import IndexSection2 from "~/components/IndexSection2";
import IndexSection3 from "~/components/IndexSection3";
import IndexSection4 from "~/components/IndexSection4";

export default {
  metaInfo: {
    title: "Ezras Nashim. Emergency Medical Care",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Ezras Nashim is a newly NYS Certified Basic Life Support First Response organization (BLS-FR) endorsed by prominent Rabbonim. We received privileges for training and rotations at Northshore University Medical Center and Brookdale Hospital. Ezras Nashim’s primary purpose is to train women as Emergency Medical Technicians (EMTs) who can then assist women in emergency situations, and preserve her dignity. Ezras Nashim is also obligated by law to serve anyone who calls for their service regardless of gender and race."
      }
    ],
    link: [{ rel: "canonical", href: "https://ezrasnashim.org/" }]
  },
  components: {
    IndexBanner,
    IndexSection1,
    IndexSection2,
    IndexSection3,
    IndexSection4
  }
};
</script>
