//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Author = module.exports.Author = function(args) {
  this.authorId = null;
  this.name = null;
  this.dateOfBirth = null;
  if (args) {
    if (args.authorId !== undefined && args.authorId !== null) {
      this.authorId = args.authorId;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.dateOfBirth !== undefined && args.dateOfBirth !== null) {
      this.dateOfBirth = args.dateOfBirth;
    }
  }
};
Author.prototype = {};
Author.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authorId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.dateOfBirth = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Author.prototype.write = function(output) {
  output.writeStructBegin('Author');
  if (this.authorId !== null && this.authorId !== undefined) {
    output.writeFieldBegin('authorId', Thrift.Type.STRING, 1);
    output.writeString(this.authorId);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.dateOfBirth !== null && this.dateOfBirth !== undefined) {
    output.writeFieldBegin('dateOfBirth', Thrift.Type.STRING, 3);
    output.writeString(this.dateOfBirth);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookRequest = module.exports.BookRequest = function(args) {
  this.bookId = null;
  this.title = null;
  this.description = null;
  this.publishedOn = null;
  this.type = null;
  this.author = null;
  if (args) {
    if (args.bookId !== undefined && args.bookId !== null) {
      this.bookId = args.bookId;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.publishedOn !== undefined && args.publishedOn !== null) {
      this.publishedOn = args.publishedOn;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.author !== undefined && args.author !== null) {
      this.author = new ttypes.Author(args.author);
    }
  }
};
BookRequest.prototype = {};
BookRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.bookId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.publishedOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.author = new ttypes.Author();
        this.author.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookRequest.prototype.write = function(output) {
  output.writeStructBegin('BookRequest');
  if (this.bookId !== null && this.bookId !== undefined) {
    output.writeFieldBegin('bookId', Thrift.Type.STRING, 1);
    output.writeString(this.bookId);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 2);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.publishedOn !== null && this.publishedOn !== undefined) {
    output.writeFieldBegin('publishedOn', Thrift.Type.STRING, 4);
    output.writeString(this.publishedOn);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 5);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.author !== null && this.author !== undefined) {
    output.writeFieldBegin('author', Thrift.Type.STRUCT, 6);
    this.author.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AddBookRequest = module.exports.AddBookRequest = function(args) {
  this.title = null;
  this.description = null;
  this.publishedOn = null;
  this.type = null;
  this.authorId = null;
  if (args) {
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.publishedOn !== undefined && args.publishedOn !== null) {
      this.publishedOn = args.publishedOn;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.authorId !== undefined && args.authorId !== null) {
      this.authorId = args.authorId;
    }
  }
};
AddBookRequest.prototype = {};
AddBookRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.publishedOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.authorId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AddBookRequest.prototype.write = function(output) {
  output.writeStructBegin('AddBookRequest');
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 1);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 2);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.publishedOn !== null && this.publishedOn !== undefined) {
    output.writeFieldBegin('publishedOn', Thrift.Type.STRING, 3);
    output.writeString(this.publishedOn);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 4);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.authorId !== null && this.authorId !== undefined) {
    output.writeFieldBegin('authorId', Thrift.Type.STRING, 5);
    output.writeString(this.authorId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var GetBooksRequest = module.exports.GetBooksRequest = function(args) {
  this.bookId = null;
  this.title = null;
  this.description = null;
  this.publishedOn = null;
  this.type = null;
  this.author = null;
  if (args) {
    if (args.bookId !== undefined && args.bookId !== null) {
      this.bookId = args.bookId;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.publishedOn !== undefined && args.publishedOn !== null) {
      this.publishedOn = args.publishedOn;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.author !== undefined && args.author !== null) {
      this.author = new ttypes.Author(args.author);
    }
  }
};
GetBooksRequest.prototype = {};
GetBooksRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.bookId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.publishedOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.author = new ttypes.Author();
        this.author.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GetBooksRequest.prototype.write = function(output) {
  output.writeStructBegin('GetBooksRequest');
  if (this.bookId !== null && this.bookId !== undefined) {
    output.writeFieldBegin('bookId', Thrift.Type.STRING, 1);
    output.writeString(this.bookId);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 2);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.publishedOn !== null && this.publishedOn !== undefined) {
    output.writeFieldBegin('publishedOn', Thrift.Type.STRING, 4);
    output.writeString(this.publishedOn);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 5);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.author !== null && this.author !== undefined) {
    output.writeFieldBegin('author', Thrift.Type.STRUCT, 6);
    this.author.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UpdateBookRequest = module.exports.UpdateBookRequest = function(args) {
  this.title = null;
  this.description = null;
  this.publishedOn = null;
  this.type = null;
  if (args) {
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.publishedOn !== undefined && args.publishedOn !== null) {
      this.publishedOn = args.publishedOn;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
  }
};
UpdateBookRequest.prototype = {};
UpdateBookRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.publishedOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UpdateBookRequest.prototype.write = function(output) {
  output.writeStructBegin('UpdateBookRequest');
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 1);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 2);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.publishedOn !== null && this.publishedOn !== undefined) {
    output.writeFieldBegin('publishedOn', Thrift.Type.STRING, 3);
    output.writeString(this.publishedOn);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 4);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DeleteBookRequest = module.exports.DeleteBookRequest = function(args) {
  this.bookId = null;
  if (args) {
    if (args.bookId !== undefined && args.bookId !== null) {
      this.bookId = args.bookId;
    }
  }
};
DeleteBookRequest.prototype = {};
DeleteBookRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.bookId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DeleteBookRequest.prototype.write = function(output) {
  output.writeStructBegin('DeleteBookRequest');
  if (this.bookId !== null && this.bookId !== undefined) {
    output.writeFieldBegin('bookId', Thrift.Type.STRING, 1);
    output.writeString(this.bookId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ResponseStatus = module.exports.ResponseStatus = function(args) {
  this.success = null;
  this.message = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field success is unset!');
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
ResponseStatus.prototype = {};
ResponseStatus.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ResponseStatus.prototype.write = function(output) {
  output.writeStructBegin('ResponseStatus');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 1);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AddBookResponse = module.exports.AddBookResponse = function(args) {
  this.responseStatus = null;
  this.bookRequest = null;
  if (args) {
    if (args.responseStatus !== undefined && args.responseStatus !== null) {
      this.responseStatus = new ttypes.ResponseStatus(args.responseStatus);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field responseStatus is unset!');
    }
    if (args.bookRequest !== undefined && args.bookRequest !== null) {
      this.bookRequest = new ttypes.BookRequest(args.bookRequest);
    }
  }
};
AddBookResponse.prototype = {};
AddBookResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.responseStatus = new ttypes.ResponseStatus();
        this.responseStatus.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.bookRequest = new ttypes.BookRequest();
        this.bookRequest.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AddBookResponse.prototype.write = function(output) {
  output.writeStructBegin('AddBookResponse');
  if (this.responseStatus !== null && this.responseStatus !== undefined) {
    output.writeFieldBegin('responseStatus', Thrift.Type.STRUCT, 1);
    this.responseStatus.write(output);
    output.writeFieldEnd();
  }
  if (this.bookRequest !== null && this.bookRequest !== undefined) {
    output.writeFieldBegin('bookRequest', Thrift.Type.STRUCT, 2);
    this.bookRequest.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var GetBooksResponse = module.exports.GetBooksResponse = function(args) {
  this.responseStatus = null;
  this.bookRequest = null;
  if (args) {
    if (args.responseStatus !== undefined && args.responseStatus !== null) {
      this.responseStatus = new ttypes.ResponseStatus(args.responseStatus);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field responseStatus is unset!');
    }
    if (args.bookRequest !== undefined && args.bookRequest !== null) {
      this.bookRequest = new ttypes.BookRequest(args.bookRequest);
    }
  }
};
GetBooksResponse.prototype = {};
GetBooksResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.responseStatus = new ttypes.ResponseStatus();
        this.responseStatus.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.bookRequest = new ttypes.BookRequest();
        this.bookRequest.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GetBooksResponse.prototype.write = function(output) {
  output.writeStructBegin('GetBooksResponse');
  if (this.responseStatus !== null && this.responseStatus !== undefined) {
    output.writeFieldBegin('responseStatus', Thrift.Type.STRUCT, 1);
    this.responseStatus.write(output);
    output.writeFieldEnd();
  }
  if (this.bookRequest !== null && this.bookRequest !== undefined) {
    output.writeFieldBegin('bookRequest', Thrift.Type.STRUCT, 2);
    this.bookRequest.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Exception = module.exports.Exception = function(args) {
  Thrift.TException.call(this, "Exception");
  this.name = "Exception";
  this.success = null;
  this.message = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field success is unset!');
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(Exception, Thrift.TException);
Exception.prototype.name = 'Exception';
Exception.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Exception.prototype.write = function(output) {
  output.writeStructBegin('Exception');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 1);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

