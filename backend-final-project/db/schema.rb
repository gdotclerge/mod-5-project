# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180227220431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "package_tags", force: :cascade do |t|
    t.bigint "package_id"
    t.bigint "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["package_id"], name: "index_package_tags_on_package_id"
    t.index ["tag_id"], name: "index_package_tags_on_tag_id"
  end

  create_table "packages", force: :cascade do |t|
    t.bigint "photographer_id"
    t.float "price"
    t.float "hours"
    t.integer "min_photos"
    t.integer "max_photos"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photographer_id"], name: "index_packages_on_photographer_id"
  end

  create_table "photo_sessions", force: :cascade do |t|
    t.string "session_type"
    t.string "start_date"
    t.string "end_date"
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "additional_notes"
    t.boolean "reserved", default: false
    t.bigint "user_id"
    t.bigint "photographer_id"
    t.float "price"
    t.integer "hours"
    t.integer "min_photos"
    t.integer "max_photos"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photographer_id"], name: "index_photo_sessions_on_photographer_id"
    t.index ["user_id"], name: "index_photo_sessions_on_user_id"
  end

  create_table "photographers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "website"
    t.string "custom_url"
    t.string "business_name"
    t.string "profile_photo"
    t.string "instagram_url"
    t.string "facebook_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.bigint "tag_id"
    t.bigint "photographer_id"
    t.string "img_src"
    t.string "img_size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photographer_id"], name: "index_photos_on_photographer_id"
    t.index ["tag_id"], name: "index_photos_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "city"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
