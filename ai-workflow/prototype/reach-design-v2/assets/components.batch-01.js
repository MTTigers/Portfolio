(function () {
  function closest(target, selector) {
    return target && target.closest ? target.closest(selector) : null;
  }

  function closeSelects(except) {
    document.querySelectorAll(".rd-ant-select.is-open, .rd-ant-dropdown.is-open").forEach(function (node) {
      if (node !== except) node.classList.remove("is-open");
    });
  }

  function closeReachSelects(except) {
    document.querySelectorAll(".document-drawer-select.custom.open").forEach(function (node) {
      if (node !== except) node.classList.remove("open");
    });
  }

  document.addEventListener("click", function (event) {
    var selectTrigger = closest(event.target, "[data-rd-select-trigger]");
    if (selectTrigger) {
      var select = closest(selectTrigger, ".rd-ant-select, .rd-ant-dropdown");
      var nextOpen = !select.classList.contains("is-open");
      closeSelects(select);
      select.classList.toggle("is-open", nextOpen);
      event.preventDefault();
      return;
    }

    var option = closest(event.target, "[data-rd-select-option]");
    if (option) {
      var owner = closest(option, ".rd-ant-select, .rd-ant-dropdown");
      owner.querySelectorAll(".rd-ant-select-option, .rd-ant-dropdown-item").forEach(function (item) {
        item.classList.remove("is-selected");
      });
      option.classList.add("is-selected");
      var value = owner.querySelector("[data-rd-select-value]");
      if (value) value.textContent = option.textContent.trim();
      owner.classList.remove("is-open");
      event.preventDefault();
      return;
    }

    var reachSelectTrigger = closest(event.target, "[data-rd-reach-select-trigger]");
    if (reachSelectTrigger) {
      var reachSelect = closest(reachSelectTrigger, ".document-drawer-select.custom");
      var reachNextOpen = !reachSelect.classList.contains("open");
      closeReachSelects(reachSelect);
      reachSelect.classList.toggle("open", reachNextOpen);
      event.preventDefault();
      return;
    }

    var reachOption = closest(event.target, "[data-rd-reach-select-option]");
    if (reachOption) {
      var reachOwner = closest(reachOption, ".document-drawer-select.custom");
      reachOwner.querySelectorAll(".document-drawer-select-option").forEach(function (item) {
        item.classList.remove("selected");
      });
      reachOption.classList.add("selected");
      var reachValue = reachOwner.querySelector(".document-drawer-select-text");
      if (reachValue) {
        reachValue.textContent = reachOption.textContent.trim();
        reachValue.classList.remove("placeholder");
      }
      reachOwner.classList.remove("open");
      event.preventDefault();
      return;
    }

    var switchNode = closest(event.target, ".rd-ant-switch");
    if (switchNode && !switchNode.classList.contains("is-disabled")) {
      switchNode.classList.toggle("is-checked");
      switchNode.setAttribute("aria-checked", switchNode.classList.contains("is-checked") ? "true" : "false");
      return;
    }

    var treeTitle = closest(event.target, ".rd-ant-tree-title");
    if (treeTitle) {
      var tree = closest(treeTitle, ".rd-ant-tree");
      if (tree) {
        tree.querySelectorAll(".rd-ant-tree-node").forEach(function (node) {
          node.classList.remove("is-selected");
        });
      }
      closest(treeTitle, ".rd-ant-tree-node").classList.add("is-selected");
      return;
    }

    var pickerCell = closest(event.target, ".rd-ant-picker-cell");
    if (pickerCell && !pickerCell.classList.contains("is-disabled")) {
      var panel = closest(pickerCell, ".rd-ant-picker-panel");
      if (panel) {
        panel.querySelectorAll(".rd-ant-picker-cell").forEach(function (cell) {
          cell.classList.remove("is-selected");
        });
      }
      pickerCell.classList.add("is-selected");
      var picker = panel && panel.previousElementSibling;
      if (picker && picker.classList.contains("rd-ant-picker")) {
        var valueNode = picker.querySelector("[data-rd-picker-value]");
        if (valueNode) valueNode.textContent = pickerCell.textContent.trim();
      }
      return;
    }

    if (!closest(event.target, ".rd-ant-select, .rd-ant-dropdown")) {
      closeSelects();
    }

    if (!closest(event.target, ".document-drawer-select.custom")) {
      closeReachSelects();
    }
  });

  document.addEventListener("submit", function (event) {
    var form = closest(event.target, "[data-rd-reach-form]");
    if (!form) return;
    event.preventDefault();
    var valid = true;
    form.querySelectorAll(".document-drawer-field.is-required").forEach(function (item) {
      var control = item.querySelector("[data-rd-reach-required]");
      var invalid = control && !control.value.trim();
      item.classList.toggle("has-error", Boolean(invalid));
      if (invalid) valid = false;
    });
    var error = form.querySelector("[data-rd-reach-form-error]");
    if (error) {
      error.hidden = valid;
      error.textContent = valid ? "" : "请完成必填项";
    }
    form.dispatchEvent(new CustomEvent("rd-reach-form-validated", { bubbles: true, detail: { valid: valid } }));
  });

})();
