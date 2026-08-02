function describeDeclaration(keyword) {
  if (typeof keyword !== "string") {
    return "Invalid";
  }

  if (keyword === "var") {
    return "Can redeclare, can reassign";
  } else if (keyword === "let") {
    return "Cannot redeclare, can reassign";
  } else if (keyword === "const") {
    return "Cannot redeclare, cannot reassign";
  }

  return "Invalid";
}

function bookTicket(movie, seats = 1, pricePerSeat = 300) {
  if (
    typeof movie !== "string" ||
    typeof seats !== "number" ||
    typeof pricePerSeat !== "number"
  ) {
    return "Invalid";
  }

  return `${movie}: ${seats} seat(s), Total ${seats * pricePerSeat}`;
}

function generateReceipt(customerName, items, total) {
  if (
    typeof customerName !== "string" ||
    !Array.isArray(items) ||
    items.length === 0 ||
    typeof total !== "number"
  ) {
    return "Invalid";
  }

  return `Receipt for ${customerName}
    Items: ${items}
    Total: ${total}`;
}

const calculateBMI = (weights, height) => {
  if (typeof weights !== "number" || typeof height !== "number" || height < 0) {
    return "Invalid";
  }

  let bmi = weights / (height * height);
  return bmi.toFixed(2);
};

function mergeInventory(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  let mergeArr = [...arr1, ...arr2];

  return Math.max(...mergeArr);
}

function extractUserInfo(userObj) {
  if (userObj.name === undefined) {
    return "Invalid";
  }

  const { name: fullname, age, hobbies } = userObj;
  if (hobbies.length === 0) {
    hobbies[0] = "nothing yet";
  }

  return `${fullname} (${age}) likes ${hobbies[0]}`;
}

function manageInventoryObject(obj, action) {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    action = action.toLowerCase().split(":");
    if (action[0] === "keys") {
      return Object.keys(obj);
    } else if (action[0] === "values") {
      return Object.values(obj);
    } else if (action[0] === "entries") {
      return Object.entries(obj);
    } else if (action[0] === "delete") {
      delete obj[action[1]];
      return obj;
    } else if (action[0] === "seal") {
      Object.seal(obj);
      return "You cannot add any property";
    } else if (action[0] == "freeze") {
      Object.freeze(obj);
      return "You cannot change or add any property or value";
    }
  }
  return "Invalid";
}

function printObjectDetails(obj, loopType) {
  if (Object.keys(obj).length === 0) {
    return "Invalid";
  }
  let resultOfForIn = [];
  if (loopType === "forin") {
    for (const key in obj) {
      resultOfForIn.push(`${key}: ${obj[key]}`);
    }
    return resultOfForIn;
  } else if (loopType === "forofentries") {
    resultOfForOf = [];
    for (const entry of Object.entries(obj)) {
      let [key, value] = entry;
      resultOfForOf.push(`${key}: ${value}`);
    }
    return resultOfForOf;
  } else if (loopType === "entriesDestructure") {
    let resultOfDestruct = [];
    return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
  } else {
    return "Invalid";
  }
}



const calculateTotal = (items) => {
    let total = 0;
    for(let i = 0; i < items.length; i++){
        total+=items[i].price;
    }
    return `Total: ${total} Taka`;
}
