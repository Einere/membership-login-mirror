function InputTags(configs) {
    let input = document.getElementById(configs.id);
    let tagsContainer = document.getElementById("tags");

    let _privateMethods = {
        init: function (configs) {

            // this.inspectConfigProperties(configs);

            let self = this;
            let input_hidden = document.createElement('input');
            input_hidden.setAttribute('type', 'hidden');
            input_hidden.setAttribute('id', 'tagInput');
            input_hidden.setAttribute('name', 'tagInput');
            input.parentNode.insertBefore(input_hidden, input);

            tagsContainer.addEventListener('click', function (e) {
                e.target.setAttribute("focus", "");
                input.focus();
            });

            if (configs.tags) {
                configs.tags.forEach((tag) => this.create(tag.replace(/[^a-z0-9+\-.#]/ig, '').toUpperCase()));
            }

            input.addEventListener("focusout", function () {
                let tag_txt = this.value.replace(/[^a-z0-9+\-.#]/ig, ''),
                    tag_exists = Boolean(self.tags_array.indexOf(tag_txt) + 1);

                if (tag_txt && tag_exists && !configs.allowDuplicateTags) {
                    self.showDuplicate(tag_txt);
                } else if (tag_txt && tag_exists && configs.allowDuplicateTags) {
                    self.create(tag_txt);
                } else if (tag_txt && !tag_exists) {
                    self.create(tag_txt);
                }
                this.value = "";
            });

            input.addEventListener('keydown', function (e) {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    input.dispatchEvent(new Event('focusout'));
                }
            });

            input.addEventListener('keyup', function (e) {
                e.stopPropagation();

                if (e.key === ',' || e.key === 'Enter') {
                    e.preventDefault();
                    input.dispatchEvent(new Event('focusout'));
                }

                if (e.key === 'Backspace' && input.value === "") {
                    let tag_nodes = document.querySelectorAll('.tag');
                    if (tag_nodes.length > 0) {
                        input.addEventListener('keyup', function (event) {
                            if (event.key === 'Backspace') {
                                let node_to_del = tag_nodes[tag_nodes.length - 1];
                                node_to_del.remove();
                                self.update();
                            }
                        });
                    }
                }
            });

            this.update();
        },

        create: function (tag_txt) {

            let tag_nodes = document.querySelectorAll('.tag');

            if (tag_nodes.length < configs.maxTags) {
                let self = this,
                    span_tag = document.createElement('span'),
                    input_hidden_field = document.getElementById("tagInput");

                span_tag.setAttribute('class', 'tag');
                span_tag.innerText = tag_txt.toUpperCase();

                let span_tag_close = document.createElement('span');
                span_tag_close.setAttribute('class', 'close');
                span_tag.appendChild(span_tag_close);

                tagsContainer.insertBefore(span_tag, input_hidden_field);

                span_tag.childNodes[1].addEventListener('click', function () {
                    self.remove(this);
                });

                this.update();

            }
        },

        update: function () {

            let tags = document.getElementsByClassName('tag'),
                tags_arr = [];

            for (let i = 0; i < tags.length; i++) {
                tags_arr.push(tags[i].textContent.toLowerCase());
            }
            this.tags_array = tags_arr;

            document.getElementById("tagInput").setAttribute('value', tags_arr.join());
        },

        remove: function (tag) {
            if (configs.onTagRemove) configs.onTagRemove(tag.parentNode.textContent);
            tag.parentNode.remove();
            this.update();
        },

        showDuplicate: function (tag_value) {
            let tags = document.getElementsByClassName('tag');

            for (let i = 0; i < tags.length; i++) {
                if (tags[i].textContent === tag_value.toUpperCase()) {
                    tags[i].style.background = '#636363d9';
                    window.setTimeout(function () {
                        tags[i].removeAttribute('style');
                    }, 1100);
                }
            }
        }
    };

    _privateMethods.init(configs);
}

export {InputTags};