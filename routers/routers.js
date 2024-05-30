const serviceController = require("../controllers/services-controller");
const defaultController = require("../controllers/default-controllers");
const aboutController = require("../controllers/about-controller");
const skillsController = require("../controllers/skills-controller");
const portfolioController = require("../controllers/portfolio-controller");
const testimonialController = require("../controllers/testimonial-controller");
const applicationController = require("../controllers/application-Controller");
const contactController = require("../controllers/contact-controller");

const {
  SERVICE_ENDPOINT,
  SERVICE_CREATE_ENDPOINTS,
  DEFAULT_ENDPOINT,
  SERVICE_PAGE_ENDPOINT,
  SERVICE_EDIT_ENDPOINTS,
  SERVICE_DELETE_ENDPOINTS,
  ABOUT_PAGE_ENDPOINT,
  SKILLS_PAGE_ENDPOINT,
  PORTFOLIO_PAGE_ENDPOINT,
  TESTIMONIAL_PAGE_ENDPOINT,
  SAVE_CLOUD_JS,
  SERVICE_GET_BY_ID_ENDPOINT,
  ABOUT_GET_ENDPOINT,
  ABOUT_CREATE_ENDPOINT,
  SKILLS_GET_ENDPOINT,
  SKILLS_CREATE_ENDPOINT,
  PORTFOLIO_GET_ENDPOINT,
  PORTFOLIO_CREATE_ENDPOINT,
  TESTIMONIAL_GET_ALL_ENDPOINT,
  TESTIMONIAL_CREATE_ENDPOINT,
  SKILLS_GET_BY_ID_ENDPOINT,
  SKILLS_DELETE_ENDPOINT,
  SKILLS_UPDATE_ENDPOINT,
  APPLICATION_GET_ALL_ENDPOINT,
  APPLICATION_CREATE_ENDPOINT,
  CONTACT_PAGE_ENDPOINT,
  CONTACT_GET_ALL_ENDPOINT,
  CONTACT_CREATE_ENDPOINT,
} = require("../utils/url-helper");

const Router = require("./router");

const router = new Router();

router.addRoute(DEFAULT_ENDPOINT, defaultController.getDefaultPage);

router.addRoute(SERVICE_ENDPOINT, serviceController.getAllServices);
router.addRoute(SERVICE_GET_BY_ID_ENDPOINT, serviceController.getService, true);

router.addRoute(SAVE_CLOUD_JS, serviceController.getSaveCloud);
router.addRoute(SERVICE_PAGE_ENDPOINT, serviceController.getServicePage);
router.addRoute(SERVICE_CREATE_ENDPOINTS, serviceController.createService);
router.addRoute(SERVICE_EDIT_ENDPOINTS, serviceController.updateService, true);
router.addRoute(
  SERVICE_DELETE_ENDPOINTS,
  serviceController.deleteService,
  true
);

//about
router.addRoute(ABOUT_PAGE_ENDPOINT, aboutController.getAboutPage);
router.addRoute(ABOUT_GET_ENDPOINT, aboutController.getAllData);
router.addRoute(ABOUT_CREATE_ENDPOINT, aboutController.createData);

//skills
router.addRoute(SKILLS_PAGE_ENDPOINT, skillsController.getSkillPage);

router.addRoute(SKILLS_GET_ENDPOINT, skillsController.getAllSkills);

router.addRoute(SKILLS_CREATE_ENDPOINT, skillsController.insertSkill);

router.addRoute(SKILLS_GET_BY_ID_ENDPOINT, skillsController.getSkill, true);

router.addRoute(SKILLS_DELETE_ENDPOINT, skillsController.deleteSkill, true);

router.addRoute(SKILLS_UPDATE_ENDPOINT, skillsController.updateDataSkill, true);

//portfolio
router.addRoute(PORTFOLIO_PAGE_ENDPOINT, portfolioController.getPortfolioPage);
router.addRoute(PORTFOLIO_GET_ENDPOINT, portfolioController.getAllPortolio);
router.addRoute(PORTFOLIO_CREATE_ENDPOINT, portfolioController.createPortfolio);

//testimonial
router.addRoute(
  TESTIMONIAL_PAGE_ENDPOINT,
  testimonialController.getTestimonialPage
);
router.addRoute(
  TESTIMONIAL_GET_ALL_ENDPOINT,
  testimonialController.getAllTestimonial
);
router.addRoute(
  TESTIMONIAL_CREATE_ENDPOINT,
  testimonialController.createReview
);

//application

router.addRoute(
  APPLICATION_GET_ALL_ENDPOINT,
  applicationController.getAllApllication
);
router.addRoute(
  APPLICATION_CREATE_ENDPOINT,
  applicationController.createApplication
);

//contact
router.addRoute(CONTACT_PAGE_ENDPOINT, contactController.getContactPage);

router.addRoute(CONTACT_GET_ALL_ENDPOINT, contactController.getAllContact);

router.addRoute(CONTACT_CREATE_ENDPOINT, contactController.createContact);

module.exports = router.handlerRoute.bind(router);
