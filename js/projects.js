import navigation from "./components/navigation.js";
import { projectList } from "./constants/projectList.js";
import carousel from "./components/carousel.js";

navigation();

carousel(projectList);

document.body.style.overflow = 'hidden';

const modal = document.querySelector(".modal-container");

projectList.forEach(function (project) {

    let toolList = "";
    project.tools.forEach(function (tool) {
        toolList += `<li>${tool}</li>`;
    });

    modal.innerHTML += `<!-- Modal -->
                            <div class="modal fade" id="modal${project.id}" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title" id="modalLabel">${project.title}</h4>
                                    <span class="modal-title" id="modalLabel">${project.type}</span>
                                    <div class="project-links">
                                    <a href="${project.git}">GIThub Link</a>
                                    <a href="${project.deployed}">Deployed Site Link</a>
                                    </div>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                  <div><img src="${project.image}"></div>
                                  <div class="project-info">
                                  <div>
                                    <h5>About this Project</h5>
                                    <p>${project.about}</p>
                                    </div>
                                    <div>
                                    <h5>Tools Used</h5>
                                    <ul>
                                    ${toolList}
                                    </ul>
                                    </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>`;
})



