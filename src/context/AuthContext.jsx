import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

function loadUsers(){ try { return JSON.parse(localStorage.getItem('smas_users')||'[]') } catch(e){ return [] } }
function saveUsers(users){ localStorage.setItem('smas_users', JSON.stringify(users)) }

export function AuthProvider({children}){
  const [user, setUser] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem('smas_current_user')||'null') }catch(e){ return null }
  })

  useEffect(()=>{
    if(user) localStorage.setItem('smas_current_user', JSON.stringify(user))
    else localStorage.removeItem('smas_current_user')
  },[user])

  function register({name,email,password,role}){
    const users = loadUsers()
    if(users.find(u=>u.email===email)) return { error: 'User already exists' }
    const newUser = { id: Date.now(), name, email, password, role }
    users.push(newUser)
    saveUsers(users)
    setUser({ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role })
    return { ok: true }
  }

  function login({email,password}){
    const users = loadUsers()
    const found = users.find(u=>u.email===email && u.password===password)
    if(!found) return { error: 'Invalid credentials' }
    setUser({ id: found.id, name: found.name, email: found.email, role: found.role })
    return { ok: true }
  }

  function logout(){ setUser(null) }

  return <AuthContext.Provider value={{ user, register, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth(){ return useContext(AuthContext) }
