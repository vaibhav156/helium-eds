import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata("footer");
  block.textContent = "";

  // load footer fragment
  const footerPath = footerMeta.footer || "/footer";
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement("div");
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  const footerNav = document.getElementsByTagName("columns footer");
  const footerNavElements = Array.from(
    document.getElementsByClassName("columns footer")[0].children[0].children
  );
  footerNavElements.map((parentNavEls) => {
    const childNavEls = Array.from(parentNavEls.children);
    childNavEls.map((childElement) => {
      const hasH3Tag = childElement.tagName.toLowerCase() === "h3";
      if (hasH3Tag) {
        childElement.classList.add("head-title-link"); // Replace 'yourClassName' with the desired class name
      }
    });
  });
}
