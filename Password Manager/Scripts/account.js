const addNewBtn = document.querySelector(".main__container--heading-addnew");
const updateBtn = document.querySelectorAll(
  ".main__ocntainer--cards-card__img--btns-updatebtn"
);
const showDescription = document.querySelectorAll(
  ".main__ocntainer--cards-card__img--btns-showdescription"
);
const closeModelBtn = document.querySelector(".closemodelbox");
const layout = document.querySelector(".layout");
const modelbox = document.querySelector(".modelbox");
const formbox = document.querySelector(".modelbox__formbox--heading");
const formboxHeading = document.querySelector(
  ".modelbox__formbox--heading-text"
);
const iconsBtnContainer = document.querySelectorAll(
  ".main__container--cards-card__img--btns"
);
const addPasswordForm = `<form class="formbox__content--form modelbox__formbox--form">
<input
  type="text"
  name="name"
  placeholder="Your username"
  class="formbox__content--form-input modelbox__formbox--form-input"
  required
/>
<input
  type="email"
  name="email"
  required
  class="formbox__content--form-input modelbox__formbox--form-input"
  placeholder="Your email"
/>
<input
  type="password"
  name="password"
  required
  placeholder="Your password"
  class="formbox__content--form-input modelbox__formbox--form-input"
/>
<input
  type="text"
  name="website"
  required
  placeholder="Website name"
  class="formbox__content--form-input modelbox__formbox--form-input"
/>

<textarea
  style="resize: none"
  class="formbox__content--form-input modelbox__formbox--form-input"
  name="description"
  rows="2"
  placeholder="Short Description"
></textarea>

<input
  type="submit"
  value="Save Password"
  class="btn formbox__content--form-input modelbox__formbox--form-input signupbtn"
/>
</form>`;
const shortDescription = `<div class="modelbox__formbox--showdes">
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
  asperiores magni repellat necessitatibus libero adipisci dolore
  ratione delectus, recusandae beatae at mollitia odio optio corrupti
  molestias dolorem a deserunt suscipit saepe, in nam quas nisi
  consequatur. Voluptates labore, id porro exercitationem, eligendi ex
  quas commodi repudiandae laudantium neque placeat dignissimos?
</p>
</div>`;
const element = document.querySelector(".main__container--heading");

const showModelBox = () => {
  modelbox.style.display = "flex";
  layout.style.display = "block";
};

const closeModelBox = () => {
  modelbox.style.display = "none";
  layout.style.display = "none";
};

const someFeature = () => {
  element.addEventListener("click", (e) => {
    if (e.target.classList.contains("main__container--heading-addnew")) {
      formboxHeading.innerHTML = "Add New Password";
      formbox.insertAdjacentHTML("afterend", addPasswordForm);
      showModelBox();
    }
  });
};

const someFeature2 = () => {
  for (let i = 0; i < iconsBtnContainer.length; i++) {
    iconsBtnContainer[i].addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-pen-to-square")) {
        formboxHeading.innerHTML = "Update your password";
        formbox.insertAdjacentHTML("afterend", addPasswordForm);
        showModelBox();
      } else if (e.target.classList.contains("fa-info")) {
        formboxHeading.innerHTML = "Short Description";
        formbox.insertAdjacentHTML("afterend", shortDescription);
        showModelBox();
      }
    });
  }
};

someFeature();
someFeature2();
closeModelBtn.addEventListener("click", closeModelBox);
