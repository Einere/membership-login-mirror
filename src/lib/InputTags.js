function InputTags(configs) {
    this.input = document.getElementById(configs.id);
    this.tagsContainer = document.getElementById("tags");
    this.configs = configs;
    this.tags_array = [];

    this.init();
}

InputTags.prototype.init = function () {
    let input_hidden = document.createElement('input');
    input_hidden.setAttribute('type', 'hidden');
    input_hidden.setAttribute('id', 'tagInput');
    input_hidden.setAttribute('name', 'tagInput');
    this.input.parentNode.insertBefore(input_hidden, this.input);

    this.tagsContainer.addEventListener('click', function (e) {
        e.target.setAttribute("focus", "");
        this.input.focus();
    }.bind(this));

    if (this.configs.tags) {
        this.configs.tags.forEach((tag) => this.create(tag.replace(/[^a-z0-9+\-.#]/ig, '').toUpperCase()));
    }

    this.input.addEventListener("focusout", function (e) {
        let tag_txt = e.target.value.replace(/[^a-z0-9+\-.#]/ig, ''),
            tag_exists = Boolean(this.tags_array.indexOf(tag_txt) + 1);

        if (tag_txt && tag_exists && !this.configs.allowDuplicateTags) {
            this.showDuplicate(tag_txt);
        } else if (tag_txt && tag_exists && this.configs.allowDuplicateTags) {
            this.create(tag_txt);
        } else if (tag_txt && !tag_exists) {
            this.create(tag_txt);
        }
        e.target.value = "";
    }.bind(this));

    this.input.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            e.target.dispatchEvent(new Event('focusout'));
        }

        if (e.key === 'Backspace' && e.target.value.length === 0) {
            let tag_nodes = document.querySelectorAll('.tag');

            if (tag_nodes.length > 0) {
                let node_to_del = tag_nodes[tag_nodes.length - 1];
                node_to_del.remove();
                this.update();
            }
        }
    }.bind(this));

    this.input.addEventListener('keyup', function (e) {
        e.stopPropagation();

        if (e.key === ',' || e.key === 'Enter') {
            e.preventDefault();
            e.target.dispatchEvent(new Event('focusout'));
        }
    });

    this.update();
};

InputTags.prototype.create = function (tag_txt) {
    let tag_nodes = document.querySelectorAll('.tag');

    if (tag_nodes.length < this.configs.maxTags) {
        const span_tag = document.createElement('span');
        const input_hidden_field = document.getElementById("tagInput");

        span_tag.setAttribute('class', 'tag');
        span_tag.innerText = tag_txt.toUpperCase();

        const span_tag_close = document.createElement('span');
        span_tag_close.setAttribute('class', 'close');
        span_tag_close.addEventListener('click', function () {
            this.remove();
        }.bind(this));
        span_tag.appendChild(span_tag_close);

        this.tagsContainer.insertBefore(span_tag, input_hidden_field);

        this.update();
    }
};

InputTags.prototype.update = function () {
    let tags = document.getElementsByClassName('tag');

    this.tags_array = Array.prototype.reduce.call(tags, (acc, tag) => {
        acc.push(tag.textContent.toLowerCase());
        return acc;
    }, []);

    document.getElementById("tagInput").setAttribute('value', this.tags_array.join());
};

InputTags.prototype.remove = function (tag) {
    if (this.configs.onTagRemove) this.configs.onTagRemove(tag.parentNode.textContent);
    tag.parentNode.remove();
    this.update();
};

InputTags.prototype.showDuplicate = function (tag_value) {
    let tags = document.getElementsByClassName('tag');

    const duplicated = Array.prototype.find.call(tags, (tag) => tag.textContent === tag_value.toUpperCase());
    if (duplicated) {
        duplicated.style.background = '#636363d9';
        window.setTimeout(function () {
            duplicated.removeAttribute('style');
        }, 1100);
    }
};

export {InputTags};